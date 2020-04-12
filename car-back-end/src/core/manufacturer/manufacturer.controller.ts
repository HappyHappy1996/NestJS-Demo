import { Controller, Get, Param } from '@nestjs/common';
import { Car } from '../car/car.entity';
import { CarService } from '../car/car.service';
import { ManufacturerService } from './manufacturer.service';
import { Manufacturer } from './manufacturer.entity';

@Controller('manufacturers')
export class ManufacturerController {
  constructor(
    private readonly carService: CarService,
    private readonly manufacturerService: ManufacturerService,
  ) {}

  @Get('by-car/:carId')
  async findByCar(@Param('carId') id: string): Promise<Manufacturer> {
    const car: Car = await this.carService.findByIdWithManufacturer(id);
    return this.manufacturerService.findById(car.manufacturer.id);
  }
}
