import { Test, TestingModule } from '@nestjs/testing';
import { AcademicQualificationController } from './academic-qualification.controller';

describe('AcademicQualificationController', () => {
  let controller: AcademicQualificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicQualificationController],
    }).compile();

    controller = module.get<AcademicQualificationController>(AcademicQualificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
