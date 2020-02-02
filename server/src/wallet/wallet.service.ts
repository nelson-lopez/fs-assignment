import { Injectable, Logger, HttpService, NotAcceptableException } from '@nestjs/common';
import * as config from 'config'
import { EthExchangeRate } from '../types/exchange.interface';
import { lastYear } from '../utils/timestamps';


@Injectable()
export class WalletService {

  private api = config.get('server')
  private logger = new Logger('WalletService')
  private ethExchangeRates: EthExchangeRate = {
    USD: 0.0054,
    EURO: 0.0060
  }

  constructor(private http: HttpService) { }

  async checkIfExpired(address: string) {
    const key = this.api.key
    const url = `http://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${key}`
    const firstTransaction: number = await this.http.get(url).toPromise()
      .then(
        res => res.data.result[1].timeStamp
      )
      .catch(err => this.logger.verbose(`Invalid address! ${err}`))

    if (!firstTransaction) {
      throw new NotAcceptableException(`Address with credentials of ${address} not valid`)
    }
    // we have to compare the first transaction to the last year in order to find if the wallet is valid 
    return firstTransaction > lastYear ? true : false
  }

  getExchangeRate() {
    return this.ethExchangeRates
  }

  editExchangeRate(exchangeName: string, value: number): EthExchangeRate {
    const currentRates = this.ethExchangeRates

    currentRates[exchangeName] = value

    return currentRates
  }

  async returnBalance() { }

}
