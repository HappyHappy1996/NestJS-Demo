import * as moment from 'moment';
import { Between, EntityRepository, Repository } from 'typeorm';
import { Car } from './car.entity';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {

  findById(id: string): Promise<Car> {
    return this.findOne({ id });
  }

  findByIdWithManufacturer(id: string): Promise<Car> {
    return this.findOne({
      where: {
        id
      },
      relations: ['manufacturer'],
    });
  }

  applyDiscountForPeriod(startDate: moment.Moment, endDate: moment.Moment, pricePercents: number) {
    return this.createQueryBuilder()
      .update(Car)
      .set({ price: () => `(price / 100) * ${pricePercents}` })
      .where({
        firstRegistrationDate: Between(startDate, endDate),
      })
      .execute();
  }
}
