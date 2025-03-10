import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    price: number;

    @IsString()
    image: string;

    @IsString()
    category: string;

    @IsString()
    brand: string;

    @IsString()
    color: string;

    @IsString()
    size: string;
}
