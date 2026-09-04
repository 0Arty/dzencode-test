import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { ProductPrice } from './product-price.entity';
import { Guarantee } from './embedded/guarantee.embedded';
import { ProductType } from '@shared/enums/product-type.enum';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serialNumber: number;

  // isNew у ТЗ приходить як 1/0 - зручніше зберігати як boolean
  @Column({ default: true })
  isNew: boolean;

  @Column({ nullable: true })
  photo: string;

  @Column()
  title: string;

  @Column({ type: 'enum', enum: ProductType })
  type: ProductType;

  @Column({ type: 'text', nullable: true })
  specification: string;

  // Embedded-колонки: guarantee_start, guarantee_end
  @Column(() => Guarantee)
  guarantee: Guarantee;

  // Один продукт - декілька цін (USD, UAH і т.д.)
  @OneToMany(() => ProductPrice, (price) => price.product, {
    cascade: true,
    eager: true, // ціни підтягуються разом з продуктом автоматично
  })
  prices: ProductPrice[];

  // FK на приход, якому належить продукт
  @ManyToOne(() => Order, (order) => order.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({ type: 'timestamp' })
  date: Date;

  @CreateDateColumn()
  createdAt: Date;
}
