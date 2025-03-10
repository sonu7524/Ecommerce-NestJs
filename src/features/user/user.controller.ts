import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { getMissingFields } from '../../utils';
import { ApiError } from '../../utils/ApiError';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@ApiBearerAuth()
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