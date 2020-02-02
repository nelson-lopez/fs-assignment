import { Module, HttpModule } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';

@Module({
  imports: [HttpModule],
  providers: [WalletService],
  controllers: [WalletController]
})
export class WalletModule { }
