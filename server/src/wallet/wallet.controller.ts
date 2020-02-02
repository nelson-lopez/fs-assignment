import { Controller, Post, Body, Get } from '@nestjs/common';
import { WalletService } from './wallet.service';

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

  editExchangeRate() { }

  returnBalance() { }
}
