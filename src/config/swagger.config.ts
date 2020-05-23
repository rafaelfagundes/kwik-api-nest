import { DocumentBuilder } from '@nestjs/swagger';

const options = new DocumentBuilder()
  .setTitle('Kwik API')
  .setDescription('Kwik Platform API')
  .setVersion('1.0')
  .build();

export default options;
