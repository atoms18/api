import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { VerifyService } from './verify.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EncryptPayloadDto } from './dto/encrypt-payload.dto';
import { EncryptResponseDto } from './dto/encrypt-response.dto';
import { DecryptPayloadDto } from './dto/decrypt-payload.dto';
import { DecryptResponseDto } from './dto/decrypt-response.dto';

@ApiTags('verify')
@Controller()
export class VerifyController {
  constructor(private readonly service: VerifyService) {}

  @ApiOkResponse({ type: EncryptResponseDto })
  @Post('/get-encrypt-data')
  @HttpCode(HttpStatus.OK)
  public encrypt(
    @Body() encryptPayloadDto: EncryptPayloadDto,
  ): EncryptResponseDto {
    try {
      return {
        successful: true,
        error_code: String(HttpStatus.OK),
        data: this.service.encrypt(encryptPayloadDto),
      };
    } catch (error) {
      console.error(error);
      return {
        successful: false,
        error_code: String(HttpStatus.INTERNAL_SERVER_ERROR),
        data: null,
      };
    }
  }

  @ApiOkResponse({ type: DecryptResponseDto })
  @Post('/get-decrypt-data')
  @HttpCode(HttpStatus.OK)
  public decrypt(
    @Body() decryptPayloadDto: DecryptPayloadDto,
  ): DecryptResponseDto {
    try {
      return {
        successful: true,
        error_code: String(HttpStatus.OK),
        data: this.service.decrypt(decryptPayloadDto),
      };
    } catch (error) {
      console.error(error);
      return {
        successful: false,
        error_code: String(HttpStatus.INTERNAL_SERVER_ERROR),
        data: null,
      };
    }
  }
}
