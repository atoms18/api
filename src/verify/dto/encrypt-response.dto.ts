import { ApiProperty } from '@nestjs/swagger';

class EncryptResponseData {
  @ApiProperty({ type: String, example: '' })
  data1: string;

  @ApiProperty({ type: String, example: '' })
  data2: string;
}

export class EncryptResponseDto {
  @ApiProperty({ type: Boolean })
  successful: boolean;

  @ApiProperty({ example: '500', type: String })
  error_code: string;

  @ApiProperty({
    type: EncryptResponseData,
    nullable: true,
  })
  data: EncryptResponseData | null;
}
