import { Controller, Post, Body } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dtos/create-order.dto";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrderService) { }

    @Post()
    create(@Body() createOrderDto: CreateOrderDto) {
        return null;
    }
}
