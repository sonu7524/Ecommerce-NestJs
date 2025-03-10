import { IsArray, IsNumber, IsString } from "class-validator";
import { ProductEntity } from "src/features/product/entities/product.entity";

export class CreateOrderDto {
    @IsNumber()
    userId: number;

    @IsArray()
    products: ProductEntity[];

    @IsString()
    status: string;

    @IsNumber()
    totalPrice: number;
}
