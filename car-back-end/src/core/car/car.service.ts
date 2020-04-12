import * as moment from 'moment';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Car } from './car.entity';
import { CarDto } from './dto/car.dto';
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { OwnerService } from '../owner/owner.service';
import { CarRepository } from './car.repository';
import { Manufacturer } from '../manufacturer/manufacturer.entity';
import { Owner } from '../owner/owner.entity';

@Injectable()
export class CarService {
  constructor(
    private readonly manufacturerService: ManufacturerService,
    private readonly ownerService: OwnerService,
    private readonly carRepository: CarRepository,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findById(id: string): Promise<Car> {
    return this.carRepository.findById(id);
  }

  findByIdWithManufacturer(id: string): Promise<Car> {
    return this.carRepository.findByIdWithManufacturer(id);
  }

  async create(createCarDto: CarDto) {
    const {
      manufacturer, owners
    }: { manufacturer: Manufacturer, owners: Owner[] } = await this.validateAndGetRelations(createCarDto);
    const car: Car = this.build({}, createCarDto, manufacturer, owners);

    return this.carRepository.insert(car);
  }

  async update(id: string, carDto: CarDto) {
    const existingCar: Car = await this.carRepository.findById(id);
    if (!existingCar) {
      throw new HttpException('Car does not exist', HttpStatus.NOT_FOUND);
    }

    const {
      manufacturer, owners
    }: { manufacturer: Manufacturer, owners: Owner[] } = await this.validateAndGetRelations(carDto);

    this.build(existingCar, carDto, manufacturer, owners);

    return this.carRepository.save(existingCar);
  }

  applyDiscount() {
    const startDate = moment().subtract(18, 'months');
    const endDate = moment().subtract(12, 'months');
    const DISCOUNT_IN_PERCENTS = 20;
    const pricePercents = 100 - DISCOUNT_IN_PERCENTS;

    return this.carRepository.applyDiscountForPeriod(startDate, endDate, pricePercents);
  }

  remove(id: string) {
    return this.carRepository.delete({ id });
  }

  async validateAndGetRelations(carDto: CarDto): Promise<{ manufacturer: Manufacturer, owners: Owner[] }> {
    const { manufacturerId, ownersIds } = carDto;
    const [manufacturer, owners]: [Manufacturer, Owner[]] = await Promise.all([
      this.manufacturerService.findById(manufacturerId),
      this.ownerService.findByIds(ownersIds),
    ]);

    if (!manufacturer) {
      throw new HttpException('Manufacturer does not exist', HttpStatus.NOT_FOUND);
    }
    if (owners.length !== ownersIds.length) {
      throw new HttpException('Owner does not exist', HttpStatus.NOT_FOUND);
    }

    return {
      manufacturer,
      owners,
    };
  }

  build(
    carToBuild, carDto: CarDto, manufacturer: Manufacturer, owners: Owner[]
  ): Car {
    carToBuild.manufacturer = manufacturer;
    carToBuild.price = carDto.price;
    carToBuild.firstRegistrationDate = carDto.firstRegistrationDate;
    carToBuild.owners = owners;

    return carToBuild;
  }
}
