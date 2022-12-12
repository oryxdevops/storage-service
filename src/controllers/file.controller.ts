import { Controller, Get, Param, Res } from '@nestjs/common';
import { join } from 'path';
import { of } from 'rxjs';

@Controller('file')
export class FileController {
  @Get('/:filename')
  getFile(@Param('filename') filename, @Res() res) {
    return of(res.sendFile(join(process.cwd(), 'files/' + filename)));
  }
}
