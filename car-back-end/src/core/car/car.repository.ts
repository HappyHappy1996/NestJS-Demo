import { EntityRepository, Repository } from 'typeorm';
import { Car } from './car.entity';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {

  findById(id: string): Promise<Car> {
    return this.findOne({ id });
  }
}
