import { Owner } from './owner.entity';
import { EntityRepository, In, Repository } from 'typeorm';

@EntityRepository(Owner)
export class OwnerRepository extends Repository<Owner> {

  findByIds(ids: string[]): Promise<Owner[]> {
    return this.find({
      where: { id: In(ids) },
    });
  }
}
