import { Controller, Post } from '@nestjs/common';
import { OwnerService } from '../owner/owner.service';
import { CarService } from '../car/car.service';

@Controller('management')
export class ManagementController {
  constructor(
    private readonly ownerService: OwnerService,
    private readonly carService: CarService,
  ) {}

  @Post('remove-old-owners-and-apply-discount')
  async removeOldOwnersAndApplyDiscountCars() {
    // TODO: these actions should be done in transaction
    await this.ownerService.removeOldOwners();
    await this.carService.applyDiscount();
  }
}
