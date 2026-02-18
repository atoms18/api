import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DecryptPayloadDto {
  @ApiProperty({
    required: true,
    default:
      'IEdR2astlan02+GSsKarexY6g7iznYyFVhlXlYBmj2KyWNjLVRv7KIX+d3qwhq8ay6MlQHJa0CH39/2Td1eBUWH4iOG1sX07j9Y3OvirGOllGB5E54eaQpfiXE+M2QjLFAZc/Vhg/xDJHyZZkkr4e6cQfwMP6nK9wssKyPCi9ys=',
  })
  @IsNotEmpty({ message: 'data1 are require' })
  @IsString()
  data1: string;

  @ApiProperty({
    required: true,
    default: 'f86d7066a8c07157ef9b00dba3d3f18eb55d93f5dc96440496ccb38004926b45',
  })
  @IsNotEmpty({ message: 'data2 are require' })
  @IsString()
  data2: string;
}
