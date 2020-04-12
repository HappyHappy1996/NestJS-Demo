import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'manufacturers',
})
export class Manufacturer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'text', name: 'name', nullable: false })
  name: string;

  @Column({ type: 'text', name: 'phone', nullable: false })
  phone: string;

  @Column({ type: 'double precision', name: 'siret', nullable: false })
  siret: number;
}
