import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { getMissingFields } from '../../utils';
import { ApiError } from '../../utils/ApiError';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {

    if (!createProductDto.name || !createProductDto.description || !createProductDto.price || !createProductDto.image || !createProductDto.category || !createProductDto.brand || !createProductDto.color || !createProductDto.size) {
      throw ApiError.BadRequest(`Missing required fields- ${getMissingFields(createProductDto, 'name', 'description', 'price', 'image', 'category', 'brand', 'color', 'size')}`);
    }
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
