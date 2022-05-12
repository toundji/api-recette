/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  email_verified_at: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: true })
  role: string;

  @ApiProperty({ required: true })
  site_id: number;

  @ApiProperty({ required: true })
  remember_token: string;
}
