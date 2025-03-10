import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "src/features/order/entities/order.entity";

@Entity('products')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    category: string;

    @Column()
    brand: string;

    @Column()
    color: string;

    @Column()
    size: string;

    @ManyToMany(() => OrderEntity, (order) => order.products)
    orders: OrderEntity[];

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

}