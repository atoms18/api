import { ApiProperty } from '@nestjs/swagger';

class DecryptDataResponse {
  @ApiProperty({
    type: String,
    example: '',
  })
  payload: string;
}

export class DecryptResponseDto {
  @ApiProperty({ type: Boolean })
  successful: boolean;

  @ApiProperty({ example: '500', type: String })
  error_code: string;

  @ApiProperty({
    type: DecryptDataResponse,
    nullable: true,
  })
  data: DecryptDataResponse | null;
}
