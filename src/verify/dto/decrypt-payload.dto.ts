import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DecryptPayloadDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'data1 are require' })
  @IsString()
  data1: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'data2 are require' })
  @IsString()
  data2: string;
}
