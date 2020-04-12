import { Injectable, OnModuleInit } from '@nestjs/common';
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { ManufacturerRepository } from '../manufacturer/manufacturer.repository';
import { OwnerRepository } from '../owner/owner.repository';
import { CarRepository } from '../car/car.repository';
import { MANUFACTURERS } from './manufacturers.data';
import { CARS } from './cars.data';

@Injectable()
export class FakeService implements OnModuleInit {
  constructor(
    private readonly manufacturerService: ManufacturerService,
    private readonly manufacturerRepository: ManufacturerRepository,
    private readonly ownerRepository: OwnerRepository,
    private readonly carRepository: CarRepository,
  ) {}

  async onModuleInit() {
    await this.manufacturerRepository.save(MANUFACTURERS);
    await this.carRepository.save(CARS);

    console.log(`FakeService has been initialized.`);
  }

}
