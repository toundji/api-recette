/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class SiteDto {
  @ApiProperty({ required: true })
  nom: string;

  @ApiProperty({ required: true })
  tarif: number;
}
