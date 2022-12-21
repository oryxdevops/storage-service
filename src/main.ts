import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  /*
  app.enableCors({
    origin:
      process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
        ? 'http://localhost:3001'
        : 'https://adap.oryxuni.com',
    credentials: true,
  });
  */
  await app.listen(3005);
}
bootstrap();
