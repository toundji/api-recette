/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common/exceptions';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { ValidationError } from 'class-validator/types/validation/ValidationError';
import { AppModule } from './app.module';

function erreur(errors: ValidationError[],) {
  return new BadRequestException(errors);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     exceptionFactory: (errors: ValidationError[]) => erreur(errors),
  //   }),
  // );

  // eslint-disable-next-line prettier/prettier
  const config = new DocumentBuilder()
    .setTitle('Validation API')
    .setDescription(
      "Système d'Identification RFID Mobile des conducteurs motos(Zems) au Bénin",
    )
    .setVersion('1.0')
    .addTag('cast')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/doc', app, document);
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
