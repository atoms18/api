import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class EncryptResponseData {
  @ApiProperty({
    type: String,
    example:
      'IEdR2astlan02+GSsKarexY6g7iznYyFVhlXlYBmj2KyWNjLVRv7KIX+d3qwhq8ay6MlQHJa0CH39/2Td1eBUWH4iOG1sX07j9Y3OvirGOllGB5E54eaQpfiXE+M2QjLFAZc/Vhg/xDJHyZZkkr4e6cQfwMP6nK9wssKyPCi9ys=',
  })
  data1: string;

  @ApiProperty({
    type: String,
    example: 'f86d7066a8c07157ef9b00dba3d3f18eb55d93f5dc96440496ccb38004926b45',
  })
  data2: string;
}

export class EncryptResponseDto {
  @ApiProperty({ type: Boolean })
  successful: boolean;

  @ApiProperty({ example: String(HttpStatus.OK), type: String })
  error_code: string;

  @ApiProperty({
    type: EncryptResponseData,
    nullable: true,
  })
  data: EncryptResponseData | null;
}
