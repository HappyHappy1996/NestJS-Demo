import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarRepository } from './car.repository';

@Module({
  imports: [],
  controllers: [CarController],
  providers: [
    CarService,
    CarRepository,
  ],
})
export class CarModule {}
