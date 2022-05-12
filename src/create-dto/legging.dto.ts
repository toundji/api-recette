/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class LeggingDto {
  @ApiProperty({ required: true })
  date: Date;

  @ApiProperty({ required: true })
  heure: string;

  @ApiProperty({ required: true })
  old_caisse: string;

  @ApiProperty({ required: true })
  voie: string;

  @ApiProperty({ required: true })
  new_caisse: string;

  @ApiProperty({ required: true })
  old_vehicule: string;

  @ApiProperty({ required: true })
  old_compte: string;

  @ApiProperty({ required: true })
  admin: string;

  @ApiProperty({ required: true })
  statut: string;

  @ApiProperty({ required: true })
  site: string;
}
