

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    productImg: string;

    @Column()
    skid: string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    price: number;
}