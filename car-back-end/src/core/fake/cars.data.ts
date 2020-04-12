import { Car } from '../car/car.entity';
import { MANUFACTURERS } from './manufacturers.data';
import { Owner } from '../owner/owner.entity';

const date1 = new Date('2020-01-01');
const date2 = new Date('2020-01-02');

const OWNERS: Owner[] = [
  {
    id: '00000000-0000-0000-0000-eeeeeeeeeee1',
    name: 'owner-name-1',
    purchaseDate: date1,
    car: null,
  },
  {
    id: '00000000-0000-0000-0000-eeeeeeeeeee2',
    name: 'owner-name-1',
    purchaseDate: date2,
    car: null,
  },
];

export const CARS: Car[] = [
  {
    id: '00000000-0000-0000-0000-ccccccccccc1',
    manufacturer: MANUFACTURERS[0],
    price: 100,
    firstRegistrationDate: date1,
    owners: [OWNERS[0]],
  },
  {
    id: '00000000-0000-0000-0000-ccccccccccc2',
    manufacturer: MANUFACTURERS[0],
    price: 200,
    firstRegistrationDate: date2,
    owners: [OWNERS[1]],
  },
];

OWNERS[0].car = CARS[0];
OWNERS[1].car = CARS[1];
