import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class DecryptDataResponse {
  @ApiProperty({
    type: String,
  })
  payload: string;
}

export class DecryptResponseDto {
  @ApiProperty({ type: Boolean })
  successful: boolean;

  @ApiProperty({ example: String(HttpStatus.OK), type: String })
  error_code: string;

  @ApiProperty({
    type: DecryptDataResponse,
    nullable: true,
  })
  data: DecryptDataResponse | null;
}
