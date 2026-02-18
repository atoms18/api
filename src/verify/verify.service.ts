import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';
import { EncryptPayloadDto } from './dto/encrypt-payload.dto';
import { EncryptResponseDto } from './dto/encrypt-response.dto';
import { DecryptPayloadDto } from './dto/decrypt-payload.dto';
import { DecryptResponseDto } from './dto/decrypt-response.dto';

@Injectable()
export class VerifyService {
  constructor(private configService: ConfigService<AllConfigType>) {}

  async encrypt(payload: EncryptPayloadDto): Promise<EncryptResponseDto> {
    return {
      successful: true,
      error_code: String(HttpStatus.OK),
      data: {
        data1: '',
        data2: '',
      },
    };
  }

  async decrypt(payload: DecryptPayloadDto): Promise<DecryptResponseDto> {
    return {
      successful: true,
      error_code: String(HttpStatus.OK),
      data: {
        payload: '',
      },
    };
  }

  // async validateLogin(loginDto: AuthEmailLoginDto): Promise<LoginResponseDto> {
  //   const user = await this.usersService.findByEmail(loginDto.email);

  //   if (!user) {
  //     throw new UnprocessableEntityException({
  //       status: HttpStatus.UNPROCESSABLE_ENTITY,
  //       errors: {
  //         email: 'notFound',
  //       },
  //     });
  //   }

  //   if (user.provider !== AuthProvidersEnum.email) {
  //     throw new UnprocessableEntityException({
  //       status: HttpStatus.UNPROCESSABLE_ENTITY,
  //       errors: {
  //         email: `needLoginViaProvider:${user.provider}`,
  //       },
  //     });
  //   }

  //   if (!user.password) {
  //     throw new UnprocessableEntityException({
  //       status: HttpStatus.UNPROCESSABLE_ENTITY,
  //       errors: {
  //         password: 'incorrectPassword',
  //       },
  //     });
  //   }

  //   const isValidPassword = await bcrypt.compare(
  //     loginDto.password,
  //     user.password,
  //   );

  //   if (!isValidPassword) {
  //     throw new UnprocessableEntityException({
  //       status: HttpStatus.UNPROCESSABLE_ENTITY,
  //       errors: {
  //         password: 'incorrectPassword',
  //       },
  //     });
  //   }

  //   const hash = crypto
  //     .createHash('sha256')
  //     .update(randomStringGenerator())
  //     .digest('hex');

  //   const session = await this.sessionService.create({
  //     user,
  //     hash,
  //   });

  //   const { token, refreshToken, tokenExpires } = await this.getTokensData({
  //     id: user.id,
  //     role: user.role,
  //     sessionId: session.id,
  //     hash,
  //   });

  //   return {
  //     refreshToken,
  //     token,
  //     tokenExpires,
  //     user,
  //   };
  // }
}
