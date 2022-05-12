/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class VacationDto {
  @ApiProperty({ required: true })
  type: string;

  @ApiProperty({ required: true })
  site_id: number;
}
