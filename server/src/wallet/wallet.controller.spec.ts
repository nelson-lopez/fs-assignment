import { Test, TestingModule } from '@nestjs/testing';
import { WalletController } from './wallet.controller';
import { HttpModule } from '@nestjs/common';
import { WalletService } from './wallet.service';

describe('Wallet Controller', () => {
  let controller: WalletController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [WalletController],
      providers: [WalletService]
    }).compile();

    controller = module.get<WalletController>(WalletController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('checkIfExpired', () => {
    it('should be defined', () => {
      expect(controller.checkIfExpired).toBeDefined()

    });

  })

  describe('getExchangeRates', () => {
    it('should be defined', () => {
      expect(controller.getExchangeRate).toBeDefined()

    });

  })

  describe('editExchangeRates', () => {
    it('should be defined', () => {
      expect(controller.editExchangeRate).toBeDefined()

    });

  })

  describe('returnBalance', () => {
    it('should be defined', () => {
      expect(controller.returnBalance).toBeDefined()

    });

  })
});
