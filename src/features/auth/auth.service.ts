import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../features/user/user.service';
import { ApiError } from '../../utils/ApiError';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async signIn(
        email: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw ApiError.Unauthorized('Invalid email/password');
        }
        const isPasswordValid = await this.userService.comparePassword(pass, user.password);
        if (isPasswordValid) {
            throw ApiError.Unauthorized('Password is incorrect');
        }
        const payload = { sub: user.id, email: user.email, username: `${user.firstName} ${user.lastName}` };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signUp(signUpDto: SignUpAuthDto) {
        const user = await this.userService.findByEmail(signUpDto.email);
        if (user) {
            throw ApiError.BadRequest('User already exists');
        }
        return this.userService.create(signUpDto as CreateUserDto);
    }
}
