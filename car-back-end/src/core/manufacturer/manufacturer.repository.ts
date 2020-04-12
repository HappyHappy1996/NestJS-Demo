import { Manufacturer } from './manufacturer.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Manufacturer)
export class ManufacturerRepository extends Repository<Manufacturer> {

  findById(id: string): Promise<Manufacturer> {
    return this.findOne({ id });
  }
}
