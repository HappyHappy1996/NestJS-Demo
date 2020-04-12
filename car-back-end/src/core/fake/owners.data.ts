import { Owner } from '../owner/owner.entity';
import { CARS } from './cars.data';

const date1 = new Date('2020-01-01');

export const OWNERS: Owner[] = [
  {
    id: '00000000-0000-0000-0000-eeeeeeeeeee1',
    name: 'owner-name-1',
    purchaseDate: date1,
    cars: CARS,
  },
];
