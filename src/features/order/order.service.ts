import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private orderRepository: Repository<OrderEntity>,
    ) { }

    async create(createOrderDto: CreateOrderDto) {
        const order = this.orderRepository.create(createOrderDto);
        return this.orderRepository.save(order);
    }

    async findAll() {
        return this.orderRepository.find();
    }

    async findOne(id: number) {
        return this.orderRepository.findOne({ where: { id } });
    }

    async update(id: number, updateOrderDto: UpdateOrderDto) {
        const order = await this.findOne(id);
        if (!order) {
            throw new NotFoundException('Order not found');
        }
        return this.orderRepository.update(id, updateOrderDto);
    }

    async remove(id: number) {
        const order = await this.findOne(id);
        if (!order) {
            throw new NotFoundException('Order not found');
        }
        return this.orderRepository.delete(id);
    }
}
