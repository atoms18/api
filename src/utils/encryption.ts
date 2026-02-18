import crypto from 'crypto';

export function encryptAES(text: string, key: Buffer) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString('hex') + encrypted.toString('hex');
}

export function decryptAES(fullEncryptedText: string, key: Buffer) {
  const iv = Buffer.from(fullEncryptedText.substring(0, 32), 'hex');
  const encryptedText = Buffer.from(fullEncryptedText.substring(32), 'hex');

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}
