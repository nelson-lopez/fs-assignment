import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config'
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get('server')
  const logger = new Logger('bootstrap')

  const PORT = process.env.PORT || serverConfig.port
  app.enableCors()

  await app.listen(PORT);
  logger.log(`Application listening on port ${PORT}!`)

}
bootstrap();
