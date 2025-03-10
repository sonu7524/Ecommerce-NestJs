import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';

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
