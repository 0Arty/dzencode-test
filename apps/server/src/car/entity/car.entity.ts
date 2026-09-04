import {
   Column,
   Entity,
   JoinTable,
   ManyToMany,
   ManyToOne,
   OneToMany,
   PrimaryGeneratedColumn,
} from 'typeorm'

import { Brand } from '../../brand/entity'

@Entity()
export class Car {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   model: string // 'Camry', 'X5'

   @Column()
   year: number

   @Column('decimal', { precision: 10, scale: 2 })
   price: number

   // Багато машин належать одному бренду
   @ManyToOne(() => Brand, (brand) => brand.cars, { onDelete: 'CASCADE' })
   brand: Brand

   //
   //    @OneToMany(() => CarImage, (image) => image.car, { cascade: true })
   //    images: CarImage

   //    @ManyToMany(() => CarFeature, (feature) => feature.cars)
   //    @JoinTable({ name: 'car_features' }) // власник зв'язку — тут створиться проміжна таблиця
   //    features: CarFeature[]
}
