import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { of } from 'rxjs';

@Controller('national-service-certificate')
export class NationalServiceController {
  @Get('/:filename')
  getFile(@Param('filename') filename, @Res() res) {
    return of(
      res.sendFile(
        join(process.cwd(), 'files/national-service-certificates/' + filename),
      ),
    );
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files/national-service-certificates',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleFileUpload(@UploadedFile() file: Express.Multer.File) {
    return { file: file };
  }
}
