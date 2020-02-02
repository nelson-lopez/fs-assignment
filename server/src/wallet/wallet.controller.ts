import { Controller, Post, Body, Get, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { ExchangeValidationPipe } from '../pipes/exchange-validation.pipe';
import { ValueValidationPipe } from '../pipes/value-validation.pipe';
import { GetBalanceDto } from '../types/getBalance.dto';

@Controller('wallet')
export class WalletController {

  constructor(private walletService: WalletService) { }

  @Post('/expired')
  checkIfExpired(@Body('address') address: string) {
    return this.walletService.checkIfExpired(address)
  }
  @Get('/exchange')
  getExchangeRate() {
    return this.walletService.getExchangeRate()
  }

  @Patch('/exchange')
  @UsePipes(ValidationPipe)
  editExchangeRate(
    @Body('exchangeName', ExchangeValidationPipe) exchange: string,
    @Body('value', ValueValidationPipe) value: number
  ) {
    return this.walletService.editExchangeRate(exchange, value)
  }

  @Post('/balance')
  returnBalance(@Body() getBalanceDto: GetBalanceDto) {
    return this.walletService.returnBalance(getBalanceDto)
  }
}
