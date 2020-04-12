import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from '../car/car.entity';

@Entity({
  name: 'owners',
})
export class Owner {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'text', name: 'name', nullable: false })
  name: string;

  @Column({
    type: 'timestamp without time zone',
    name: 'purchase_date',
    default: () => 'current_timestamp',
    nullable: false,
  })
  purchaseDate: Date;

  @ManyToMany(() => Car, car => car.owners)
  @JoinTable()
  cars: Car[];
}
