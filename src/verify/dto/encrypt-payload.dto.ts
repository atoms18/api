import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class EncryptPayloadDto {
  @ApiProperty({ required: true, maxLength: 2000 })
  @IsNotEmpty({ message: 'payload must not empty' })
  @MaxLength(2000)
  @IsString()
  payload: string;
}
