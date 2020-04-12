import * as moment from 'moment';
import { Owner } from './owner.entity';
import { EntityRepository, In, LessThan, Repository } from 'typeorm';

@EntityRepository(Owner)
export class OwnerRepository extends Repository<Owner> {

  findByIds(ids: string[]): Promise<Owner[]> {
    return this.find({
      where: { id: In(ids) },
    });
  }

  dropOld(purchaseDate: moment.Moment) {
    return this.delete({
      purchaseDate: LessThan(purchaseDate),
    });
  }
}
