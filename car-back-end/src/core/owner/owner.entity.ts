import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from '../car/car.entity';

@Entity({
  name: 'owners',
})
export class Owner {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  // it should be a foreign key to some user table
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

  @ManyToOne(() => Car, car => car.owners)
  car: Car;
}
