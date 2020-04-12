import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Manufacturer } from '../manufacturer/manufacturer.entity';
import { Owner } from '../owner/owner.entity';

@Entity({
  name: 'cars',
})
export class Car {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @ManyToOne(() => Manufacturer)
  manufacturer: Manufacturer;

  @Column({ type: 'double precision', name: 'price', nullable: false })
  price: number;

  @Column({
    type: 'timestamp without time zone',
    name: 'first_registration_date',
    default: () => 'current_timestamp',
    nullable: false,
  })
  firstRegistrationDate: Date;

  @OneToMany(() => Owner, owner => owner.car, {
    cascade: ['insert'],
  })
  owners: Owner[];
}
