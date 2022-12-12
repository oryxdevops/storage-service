import { Test, TestingModule } from '@nestjs/testing';
import { EnglishSkillController } from './english-skill.controller';

describe('EnglishSkillController', () => {
  let controller: EnglishSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnglishSkillController],
    }).compile();

    controller = module.get<EnglishSkillController>(EnglishSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
