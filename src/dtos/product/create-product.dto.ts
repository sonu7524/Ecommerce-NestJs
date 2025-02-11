import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    @IsNotEmpty()
    productName: string

    @ApiProperty()
    productImg: string

    @ApiProperty()
    @IsNotEmpty()
    skid: string

    @ApiProperty()
    @IsNotEmpty()
    price: number
}
