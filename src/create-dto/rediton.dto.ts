/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class ReditonDto {
  @ApiProperty({ required: true })
  percepteur: string;

  @ApiProperty({ required: true })
  date: Date;

  @ApiProperty({ required: true })
  prix: number;

  @ApiProperty({ required: true })
  site: string;

  @ApiProperty({ required: true })
  cabine: string;

  @ApiProperty({ required: true })
  sens: string;

  @ApiProperty({ required: true })
  type: string;

  @ApiProperty({ required: true })
  ptrac: string;

  @ApiProperty({ required: true })
  cmaes: string;

  @ApiProperty({ required: true })
  es: string;

  @ApiProperty({ required: true })
  ptt: string;

  @ApiProperty({ required: true })
  over: string;

  @ApiProperty({ required: true })
  caisse: string;

  @ApiProperty({ required: true })
  plaque: string;

  @ApiProperty({ required: true })
  date_api: Date;

  @ApiProperty({ required: true })
  refer: string;

  @ApiProperty({ required: true })
  visa: string;

  @ApiProperty({ required: true })
  heure: string;
}
