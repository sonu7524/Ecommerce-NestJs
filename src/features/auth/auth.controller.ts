import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '../../decorators/public.decorator';
import { SignInAuthDto } from './dto/signin-auth.dto';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Public()
  @Post(`login`)
  login(@Body() signInDto: SignInAuthDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Public()
  @Post(`signup`)
  signup(@Body() signUpDto: SignUpAuthDto) {
    return this.authService.signUp(signUpDto);
  }
}