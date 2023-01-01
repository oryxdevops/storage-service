import { Test, TestingModule } from '@nestjs/testing';
import { NationalServiceController } from './national-service.controller';

describe('NationalServiceController', () => {
  let controller: NationalServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NationalServiceController],
    }).compile();

    controller = module.get<NationalServiceController>(NationalServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
