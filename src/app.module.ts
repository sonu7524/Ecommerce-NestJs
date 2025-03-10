import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'db/data-source';
import { AuthModule } from './features/auth/auth.module';
import { UserModule } from './features/user/user.module';
import { ProductModule } from './features/product/product.module';
import { OrderModule } from './features/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync(DataSource as TypeOrmModuleOptions),
    ProductModule,
    UserModule,
    AuthModule,
    OrderModule
  ]
})
export class AppModule { }
