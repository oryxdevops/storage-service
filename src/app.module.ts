import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadsController } from './controllers/file-uploads.controller';
import { FileController } from './controllers/file.controller';

@Module({
  imports: [MulterModule.register({ dest: './uploads' })],
  controllers: [AppController, FileUploadsController, FileController],
  providers: [AppService],
})
export class AppModule {}
