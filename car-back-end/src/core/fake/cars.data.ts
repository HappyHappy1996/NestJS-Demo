import { Car } from '../car/car.entity';
import { MANUFACTURERS } from './manufacturers.data';
import { OWNERS } from './owners.data';

const date1 = new Date('2020-01-01');
const date2 = new Date('2020-01-02');

export const CARS: Car[] = [
  {
    id: '00000000-0000-0000-0000-ccccccccccc1',
    manufacturer: MANUFACTURERS[0],
    price: 100,
    firstRegistrationDate: date1,
    owners: OWNERS,
  },
  {
    id: '00000000-0000-0000-0000-ccccccccccc2',
    manufacturer: MANUFACTURERS[0],
    price: 200,
    firstRegistrationDate: date2,
    owners: OWNERS,
  },
];
