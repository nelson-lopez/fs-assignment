import { Test, TestingModule } from '@nestjs/testing';
import { WalletService } from './wallet.service';
import { EthExchangeRate } from '../types/exchange.interface';
import { HttpModule } from '@nestjs/common';

describe('WalletService', () => {
  let service: WalletService;
  let mockEthExchange: EthExchangeRate = {
    USD: 0.0054,
    EURO: 0.0060
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [WalletService],
    }).compile();

    service = module.get<WalletService>(WalletService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('checkIfExpired', () => {
    it('should be defined', () => {
      expect(service.checkIfExpired).toBeDefined()
    });

    it('should check and return false if a wallet is over a year old', async () => {
      expect.assertions(2)
      const mockExpired = await service.checkIfExpired('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae')
      const mockValid = await service.checkIfExpired('0x777DD061b3F9865a3aD9875EFca52e3906370e2d')

      expect(mockExpired).toBe(false)
      expect(mockValid).toBe(true)
    });

    it('should throw an error for bad address', () => {
      expect(service.checkIfExpired('')).rejects.toThrow()
    });


  });

  describe('getExchangeRate', () => {
    it('should be defined', () => {
      expect(service.getExchangeRate).toBeDefined()
    });

    it('should return exchange rates for USD and EURO', () => {
      service.getExchangeRate()
      expect(service.getExchangeRate()).toStrictEqual(mockEthExchange)
    });
  });

  describe('editExchangeRate', () => {
    it('should be defined', () => {
      expect(service.editExchangeRate).toBeDefined()
    });

  });

  describe('returnBalance', () => {
    it('should be defined', () => {
      expect(service.returnBalance).toBeDefined()
    });

  });

});
