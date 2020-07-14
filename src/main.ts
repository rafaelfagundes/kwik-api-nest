require('dotenv').config();
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import * as admin from 'firebase-admin';
import { AppModule } from './app.module';
import * as serviceAccount from './config/firebase.config.json';
import swaggerOptions from './config/swagger.config';

async function bootstrap() {
  const logger = new Logger('@Main');
  const app = await NestFactory.create(AppModule);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
  });

  const apiPath = '/api';
  const apiUser = process.env.SWAGGER_USER;
  const apiPass = process.env.SWAGGER_PASSWORD;

  app.use(
    apiPath,
    basicAuth({
      challenge: true,
      users: { [apiUser]: apiPass },
    }),
  );

  app.use(
    '/api-json',
    basicAuth({
      challenge: true,
      users: { [apiUser]: apiPass },
    }),
  );

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(apiPath, app, document);

  await app.listen(process.env.NEST_PORT);

  logger.log(`Application listening on NEST_PORT: ${process.env.NEST_PORT}`);
}
bootstrap();
