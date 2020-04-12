import { Injectable } from '@nestjs/common';
import { OwnerRepository } from './owner.repository';
import { Owner } from './owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    private readonly ownerRepository: OwnerRepository,
  ) {}

  findByIds(ids: string[]): Promise<Owner[]> {
    return ids.length ?
      this.ownerRepository.findByIds(ids)
      : Promise.resolve([]);
  }
}
