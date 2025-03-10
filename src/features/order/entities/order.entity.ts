import { ProductEntity } from "src/features/product/entities/product.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @ManyToMany(() => ProductEntity, (product) => product.orders)
    products: ProductEntity[];

    @Column()
    totalPrice: number;

    @Column()
    status: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
