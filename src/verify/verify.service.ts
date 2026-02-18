import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';
import { EncryptPayloadDto } from './dto/encrypt-payload.dto';
import { EncryptResponseData } from './dto/encrypt-response.dto';
import { DecryptPayloadDto } from './dto/decrypt-payload.dto';
import { DecryptDataResponse } from './dto/decrypt-response.dto';
import crypto from 'crypto';
import { encryptAES, decryptAES } from '../utils/encryption';
import fs from 'fs';

@Injectable()
export class VerifyService {
  private static PUBLIC_KEY: string = fs.readFileSync('./public.pem', 'utf8');
  private static PRIVATE_KEY: string = fs.readFileSync('./private.pem', 'utf8');

  constructor(private configService: ConfigService<AllConfigType>) {}

  encrypt(payload: EncryptPayloadDto): EncryptResponseData {
    const aesKey = crypto.randomBytes(32); // step 2

    const payloadEncryptWithAES = encryptAES(payload.payload, aesKey); // step 3
    const aesKeyEncryptWithPrivate = crypto.privateEncrypt(
      {
        key: crypto.createPrivateKey({ key: VerifyService.PRIVATE_KEY }),
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      aesKey,
    ); // step 4

    return {
      data1: aesKeyEncryptWithPrivate.toString('base64'),
      data2: payloadEncryptWithAES,
    };
  }

  decrypt(payload: DecryptPayloadDto): DecryptDataResponse {
    const aesKey = crypto.publicDecrypt(
      {
        key: crypto.createPublicKey({ key: VerifyService.PUBLIC_KEY }),
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(payload.data1, 'base64'),
    ); // step 2

    const decodedPayload = decryptAES(payload.data2, aesKey); // step 3

    return {
      payload: decodedPayload,
    };
  }
}
