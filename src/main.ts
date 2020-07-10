require('dotenv').config();
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import * as admin from 'firebase-admin';
import { AppModule } from './app.module';
import * as serviceAccount from './config/firebase.config.json';
import swaggerOptions from './config/swagger.config';

async function bootstrap() {
  const logger = new Logger('@Main');
  const app = await NestFactory.create(AppModule);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    databaseURL: 'https://kwik-entregas.firebaseio.com',
  });

  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(process.env.PORT);

  logger.log(`Application listening on port: ${process.env.PORT}`);
}
bootstrap();
