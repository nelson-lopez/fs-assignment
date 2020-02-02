import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValueValidationPipe implements PipeTransform {

  transform(value: number) {
    if (typeof value !== 'number') {
      throw new BadRequestException(`${value} is and invalid value`)
    }
    return value
  }
}