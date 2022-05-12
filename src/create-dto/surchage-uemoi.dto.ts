/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class SurchageUemoiDto {
  @ApiProperty({ required: true })
  immatriculation: string;

  @ApiProperty({ required: true })
  poid_rouland: string;

  @ApiProperty({ required: true })
  surcharge: string;

  @ApiProperty({ required: true })
  montant_surcharge: string;

  @ApiProperty({ required: true })
  type_surcharge: string;

  @ApiProperty({ required: true })
  date_recette: string;

  @ApiProperty({ required: true })
  essieu: string;

  @ApiProperty({ required: true })
  poids_roulant: string;

  @ApiProperty({ required: true })
  poid_autorise: string;

  @ApiProperty({ required: true })
  excedent: string;

  @ApiProperty({ required: true })
  montant_apayer: string;

  @ApiProperty({ required: true })
  montant_payer: string;

  @ApiProperty({ required: true })
  percepteur: string;

  @ApiProperty({ required: true })
  site: string;

  @ApiProperty({ required: true })
  cabine: string;

  @ApiProperty({ required: true })
  sens: string;
}
