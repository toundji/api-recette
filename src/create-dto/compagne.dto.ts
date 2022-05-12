/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CompagneDto {
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
  heure_debut: Date;

  @ApiProperty({ required: true })
  heure_fin: Date;
}
