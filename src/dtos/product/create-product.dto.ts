import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    productName: string

    productImg: string

    @IsNotEmpty()
    skid: string

    @IsNotEmpty()
    price: number
}
