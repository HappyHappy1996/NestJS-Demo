import * as moment from 'moment';
import { Injectable } from '@nestjs/common';
import { OwnerRepository } from './owner.repository';
import { Owner } from './owner.entity';
import { DeleteResult } from 'typeorm';

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

  removeOldOwners(): Promise<DeleteResult> {
    const thresholdDate = moment().subtract(18, 'months');
    return this.ownerRepository.dropOld(thresholdDate);
  }
}
