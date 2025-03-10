import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @MinLength(8)
    password: string;
}
