import { PipeTransform, BadRequestException } from '@nestjs/common';

export class ExchangeValidationPipe implements PipeTransform {
  readonly allowedExchanges = [
    "USD",
    "EURO"
  ]
  transform(value: any) {
    if (!this.isExchangeValid(value)) {
      throw new BadRequestException(`${value} is and invalid exchange type`)
    }
    return value
  }

  private isExchangeValid(type: any) {
    const index = this.allowedExchanges.indexOf(type)
    return index !== -1
  }
}