/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class FicheTechniqueDto {
  @ApiProperty({ required: true })
  nbre_de_panne: string;

  @ApiProperty({ required: true })
  nbre_coupure_electrique: string;

  @ApiProperty({ required: true })
  disfonctionement: string;
}
