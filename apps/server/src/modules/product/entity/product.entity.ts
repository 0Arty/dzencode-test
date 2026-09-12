import {
   Column,
   CreateDateColumn,
   Entity,
   JoinColumn,
   ManyToOne,
   OneToMany,
   PrimaryGeneratedColumn,
} from 'typeorm'
import { Order } from '../../order/entity'
import { ProductPrice } from '../../price/entity'
import { ProductType } from '@types'

@Entity('products')
export class Product {
   @PrimaryGeneratedColumn()
   id!: number

   @Column()
   title!: string

   @Column()
   serialNumber!: number

   @Column()
   isNew!: boolean

   @Column()
   specification!: string

   @Column({ type: 'enum', enum: ProductType })
   type!: ProductType

   @Column({ type: 'timestamp' })
   guarantee_start!: Date

   @Column({ type: 'timestamp' })
   guarantee_end!: Date

   @OneToMany(() => ProductPrice, (price) => price.product, {
      cascade: true,
      eager: true,
   })
   prices!: ProductPrice[]

   @ManyToOne(() => Order, (order) => order.products, {
      onDelete: 'SET NULL',
      nullable: true,
   })
   @JoinColumn({ name: 'order_id' })
   order!: Order | null

   @CreateDateColumn()
   createdAt!: Date
}
