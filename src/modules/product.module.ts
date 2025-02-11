import { Module } from '@nestjs/common';
import { ProductService } from '../services/product/product.service';
import { ProductController } from 'src/controllers/products/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
