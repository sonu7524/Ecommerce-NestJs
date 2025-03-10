import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/dataset/auth/auth.controller';
import { AuthService } from 'src/dataset/auth/auth.service';
import { UserModule } from '../users/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10m' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule { }
