/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class ComptageDto {
  @ApiProperty({ required: true })
  percepteur: string;

  @ApiProperty({ required: true })
  voie: string;

  @ApiProperty({ required: true })
  site: string;

  @ApiProperty({ required: true })
  montant_passage: number;

  @ApiProperty({ required: true })
  montant: number;

  @ApiProperty({ required: true })
  nbres_camion: string;

  @ApiProperty({ required: true })
  heure_debut: string;

  @ApiProperty({ required: true })
  heure_fin: string;

}
