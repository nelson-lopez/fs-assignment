import { Injectable, Logger, HttpService, NotAcceptableException } from '@nestjs/common';
import * as config from 'config'
import { EthExchangeRate } from '../types/exchange.interface';
import { lastYear } from '../utils/timestamps';
import { GetBalanceDto } from '../types/getBalance.dto';
const Web3 = require('web3')

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

  async returnBalance(getBalanceDto: GetBalanceDto) {
    const { address, exchange } = getBalanceDto

    const key = this.api.key
    const etherScanUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${key}`
    const currentWalletBalance = await this.http.get(etherScanUrl).toPromise()
      .then(res => res.data.result)
      .catch(err => this.logger.verbose(`Invalid address! ${err}`))

    const url = 'https://ropsten.infura.io/'
    const web3 = new Web3(new Web3.providers.HttpProvider(url))

    /**
     * Here we have to convert account wei unit into ether and divide in order to get proper conversion 
     */
    const currentEther = web3.utils.fromWei(currentWalletBalance)
    const selectedExchange = this.ethExchangeRates[exchange]

    if (!selectedExchange) {
      throw new NotAcceptableException(`Exchange type of ${exchange} is not valid`)
    }
    return Math.round(currentEther / selectedExchange)

  }

}
