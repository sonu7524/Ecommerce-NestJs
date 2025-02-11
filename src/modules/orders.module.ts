import { Module } from '@nestjs/common';
import { OrdersController } from 'src/controllers/orders/orders.controller';
import { OrderService } from 'src/services/order/order.service';

@Module({
  controllers: [OrdersController],
  providers: [OrderService]
})
export class OrdersModule { }
