import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { response } from 'express';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/dtos/user/update-user.dto';
import { UserService } from 'src/services/user/user.service';
import { getMissingFields } from 'src/utils';
import { ApiError } from 'src/utils/ApiError';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.password || !createUserDto.email || !createUserDto.firstName || !createUserDto.lastName) {
      // error with proper http status
      throw ApiError.BadRequest(`Missing required fields- ${getMissingFields(createUserDto, 'password', 'email', 'firstName', 'lastName')}`);
    }

    if (createUserDto.password.length < 8) {
      return ApiError.BadRequest('Password must be at least 8 characters');
    }

    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}