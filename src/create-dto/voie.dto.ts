/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class VoieDto {
  @ApiProperty({ required: true })
  nom: string;

  @ApiProperty({ required: true })
  sens: string;

  @ApiProperty({ required: true })
  site_id: number;
}
