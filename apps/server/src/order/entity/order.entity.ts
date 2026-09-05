import {
   Column,
   CreateDateColumn,
   Entity,
   OneToMany,
   PrimaryGeneratedColumn,
} from 'typeorm'
import { Product } from '../../product/entity'

@Entity('orders')
export class Order {
   @PrimaryGeneratedColumn()
   id!: number

   @Column()
   title!: string

   @Column({ type: 'text', nullable: true })
   description!: string | null

   @OneToMany(() => Product, (product) => product.order, {
      cascade: true,
   })
   products!: Product[]

   @CreateDateColumn()
   createdAt!: Date
}
