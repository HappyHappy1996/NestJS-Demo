import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Car } from './car.entity';
import { CarService } from './car.service';
import { CarDto } from './dto/car.dto';

@Controller('cars')
export class CarController {
  constructor(
    private readonly carService: CarService,
  ) {}

  @Get()
  findList(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Car> {
    return this.carService.findById(id);
  }

  @Post()
  create(@Body() carDto: CarDto) {
    return this.carService.create(carDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() carDto: CarDto) {
    return this.carService.update(id, carDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.remove(id);
  }
}
