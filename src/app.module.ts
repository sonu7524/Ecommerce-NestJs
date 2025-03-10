import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'db/data-source';
import { ProductModule } from './dataset/products/product.module';
import { UserModule } from './dataset/users/user.module';
import { AuthModule } from './dataset/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync(DataSource as TypeOrmModuleOptions),
    ProductModule,
    UserModule,
    AuthModule
  ]
})
export class AppModule { }
