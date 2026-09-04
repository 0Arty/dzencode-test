import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // Дата створення приходу (з ТЗ). Якщо треба лише "автоматично при вставці" -
  // заміни на @CreateDateColumn і прибери @Column.
  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'text', nullable: true })
  description: string;

  // У ТЗ products - геттер, що повертає ВСІ продукти (баг у моковому файлі).
  // У реальній БД зв'язок Order -> Products має бути "один до багатьох",
  // де кожен продукт належить конкретному приходу через order_id (FK).
  @OneToMany(() => Product, (product) => product.order, {
    cascade: true,
  })
  products: Product[];

  @CreateDateColumn()
  createdAt: Date;
}
