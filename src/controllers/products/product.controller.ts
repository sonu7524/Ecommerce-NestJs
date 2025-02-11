import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProductDto } from 'src/dtos/product/create-product.dto';
import { UpdateProductDto } from 'src/dtos/product/update-product.dto';
import { ProductService } from 'src/services/product/product.service';
import { getMissingFields } from 'src/utils';
import { ApiError } from 'src/utils/ApiError';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {

    if (!createProductDto.productName || !createProductDto.productImg || !createProductDto.skid || !createProductDto.price) {
      throw ApiError.BadRequest(`Missing required fields- ${getMissingFields(createProductDto, 'productName', 'productImg', 'skid', 'price')}`);
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
