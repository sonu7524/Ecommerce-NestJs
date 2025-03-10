import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { SignInDto } from 'src/dataset/auth/dtos/auth.dto';
import { AuthService } from 'src/dataset/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Public()
  @Post(`login`)
  login(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}