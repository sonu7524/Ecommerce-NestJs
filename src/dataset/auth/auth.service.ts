import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { ApiError } from 'src/utils/ApiError';

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
}
