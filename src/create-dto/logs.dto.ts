/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class LogsDto {
  @ApiProperty({required:true})
  percepteur: string;
  
  @ApiProperty({required:true})
  date: Date;
  
  @ApiProperty({required:true})
  heure: string;
  
  @ApiProperty({required:true})
  cabine: string;
  
  @ApiProperty({required:true})
  site: string;
  
  @ApiProperty({required:true})
  old_percepteur: string;
  
  @ApiProperty({required:true})
  agent_homintec: string;
  
  @ApiProperty({required:true})
  is_sent: string;
  
  @ApiProperty({required:true})
  refer: string;
  
  @ApiProperty({required:true})
  statut: string;
 

}
