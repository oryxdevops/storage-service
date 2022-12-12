import { Test, TestingModule } from '@nestjs/testing';
import { QidController } from './qid.controller';

describe('QidController', () => {
  let controller: QidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QidController],
    }).compile();

    controller = module.get<QidController>(QidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
