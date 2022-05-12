/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class ReditonUemoDto {
  @ApiProperty({ required: true })
  site: string;

  @ApiProperty({ required: true })
  date: string;

  @ApiProperty({ required: true })
  heure: string;

  @ApiProperty({ required: true })
  immatricule: string;

  @ApiProperty({ required: true })
  conducteur: string;

  @ApiProperty({ required: true })
  produit: string;

  @ApiProperty({ required: true })
  provenance: string;

  @ApiProperty({ required: true })
  client: string;

  @ApiProperty({ required: true })
  classe: string;

  @ApiProperty({ required: true })
  ess1: string;

  @ApiProperty({ required: true })
  ess2: string;

  @ApiProperty({ required: true })
  ess3: string;

  @ApiProperty({ required: true })
  ess4: string;

  @ApiProperty({ required: true })
  ess5: string;

  @ApiProperty({ required: true })
  ess6: string;

  @ApiProperty({ required: true })
  ess7: string;

  @ApiProperty({ required: true })
  ess8: string;

  @ApiProperty({ required: true })
  ess9: string;

  @ApiProperty({ required: true })
  Gpe1: string;

  @ApiProperty({ required: true })
  Gpe2: string;

  @ApiProperty({ required: true })
  Gpe3: string;

  @ApiProperty({ required: true })
  Gpe4: string;

  @ApiProperty({ required: true })
  surchGpe1: string;

  @ApiProperty({ required: true })
  surchGpe2: string;

  @ApiProperty({ required: true })
  surchGpe4: string;

  @ApiProperty({ required: true })
  surchGpe3: string;

  @ApiProperty({ required: true })
  PdsTotal: string;

  @ApiProperty({ required: true })
  surchtotal: string;
}
