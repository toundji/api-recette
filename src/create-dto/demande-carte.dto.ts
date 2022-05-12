/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class DemandeCarteDto {
  @ApiProperty({ required: true })
  nom: string;

  @ApiProperty({ required: true })
  prenom: string;

  @ApiProperty({ required: true })
  tel: string;

  @ApiProperty({ required: true })
  montant_recharge: string;

  @ApiProperty({ required: true })
  kindiddocument: string;

  @ApiProperty({ required: true })
  iddocument: string;

  @ApiProperty({ required: true })
  statut: string;

  @ApiProperty({ required: true })
  type_recharge: string;

  @ApiProperty({ required: true })
  refer_recharge: string;
}
