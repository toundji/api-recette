/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class PercepteurDto {
  @ApiProperty({ required: true })
  nom: string;

  @ApiProperty({ required: true })
  prenom: string;
}
