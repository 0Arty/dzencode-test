import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from '../../product/entity'

import { CurrencySymbol } from '@mono/types'

@Entity('product_prices')
export class ProductPrice {
   @PrimaryGeneratedColumn()
   id!: number

   @Column({ type: 'decimal', precision: 12, scale: 2 })
   value!: number

   @Column({ type: 'enum', enum: CurrencySymbol })
   symbol!: CurrencySymbol

   // true, якщо саме цю валюту показувати за замовчуванням у UI
   @Column({ default: false })
   isDefault!: boolean

   @ManyToOne(() => Product, (product) => product.prices, {
      onDelete: 'CASCADE',
   })
   product!: Product
}
