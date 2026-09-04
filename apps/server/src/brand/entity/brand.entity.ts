import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Car } from '../../car/entity'

@Entity()
export class Brand {
   @PrimaryGeneratedColumn()
   id: number

   @Column({ unique: true })
   name: string

   @OneToMany(() => Car, (car) => car.brand)
   cars: Car[]
}
