import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// controllers
import { CarController } from './car/car.controller';

// services
import { CarService } from './car/car.service';
import { ManufacturerService } from './manufacturer/manufacturer.service';
import { OwnerService } from './owner/owner.service';
import { FakeService } from './fake/fake.service';

// repositories
import { CarRepository } from './car/car.repository';
import { ManufacturerRepository } from './manufacturer/manufacturer.repository';
import { OwnerRepository } from './owner/owner.repository';

@Module({
  exports: [],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      CarRepository,
      ManufacturerRepository,
      OwnerRepository,
    ]),
  ],
  providers: [
    CarService,
    ManufacturerService,
    OwnerService,
    FakeService,
  ],
  controllers: [
    CarController,
  ],
})
export class CoreModule {}
