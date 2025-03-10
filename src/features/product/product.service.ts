import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private usersRepository: Repository<ProductEntity>,
  ) { }

  create(createProductDto: CreateProductDto) {
    return this.usersRepository.save(createProductDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.usersRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
