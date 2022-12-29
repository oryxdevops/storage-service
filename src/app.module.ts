import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadsController } from './controllers/file-uploads.controller';
import { FileController } from './controllers/file.controller';
import { QidController } from './controllers/qid.controller';
import { PassportController } from './controllers/passport.controller';
import { PhotoController } from './controllers/photo.controller';
import { AcademicQualificationController } from './controllers/academic-qualification.controller';
import { EnglishSkillController } from './controllers/english-skill.controller';
import { CvController } from './controllers/cv.controller';

@Module({
  imports: [MulterModule.register({ dest: './uploads' })],
  controllers: [AppController, FileUploadsController, FileController, QidController, PassportController, PhotoController, AcademicQualificationController, EnglishSkillController, CvController],
  providers: [AppService],
})
export class AppModule {}
