import { Injectable } from '@nestjs/common';
import { ManufacturerRepository } from './manufacturer.repository';
import { Manufacturer } from './manufacturer.entity';

@Injectable()
export class ManufacturerService {
  constructor(
    private readonly manufacturerRepository: ManufacturerRepository,
  ) {}

  findById(id: string): Promise<Manufacturer> {
    return this.manufacturerRepository.findById(id);
  }
}
