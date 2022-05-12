/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class HydrocarbureDto {
  @ApiProperty({ required: true })
  percepteur: string;

  @ApiProperty({ required: true })
  date: Date;

  @ApiProperty({ required: true })
  prix: string;

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
  destination: string;

  @ApiProperty({ required: true })
  es: string;

  @ApiProperty({ required: true })
  ptt: string;

  @ApiProperty({ required: true })
  conducteur: string;

  @ApiProperty({ required: true })
  provenance: string;

  @ApiProperty({ required: true })
  plaque: string;
}
