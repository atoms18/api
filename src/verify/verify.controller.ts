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
  ): Promise<EncryptResponseDto> {
    return this.service.encrypt(encryptPayloadDto);
  }

  @ApiOkResponse({ type: DecryptResponseDto })
  @Post('/get-decrypt-data')
  @HttpCode(HttpStatus.OK)
  public decrypt(
    @Body() decryptPayloadDto: DecryptPayloadDto,
  ): Promise<DecryptResponseDto> {
    return this.service.decrypt(decryptPayloadDto);
  }
}
