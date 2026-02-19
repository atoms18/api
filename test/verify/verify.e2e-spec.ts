import request from 'supertest';

describe('Verify Module', () => {
  const app = 'http://localhost:3000';
  const testPayload = 'Taobin';

  let encryptData;
  beforeAll(() => {
    encryptData = null;
  });

  describe('Get Encrypt Data', () => {
    it('should fail with non-payload: /get-encrypt-data (POST)', () => {
      return request(app)
        .post('/get-encrypt-data')
        .send({})
        .expect(422)
        .expect(({ body }) => {
          expect(body.successful).toBe(false);
          expect(body.error_code).toBe('422');
          expect(body.data.payload).toBeDefined();
        });
    });

    it('should fail with incorrect payload: /get-encrypt-data (POST)', () => {
      return request(app)
        .post('/get-encrypt-data')
        .send({
          payload: '',
        })
        .expect(422)
        .expect(({ body }) => {
          expect(body.successful).toBe(false);
          expect(body.error_code).toBe('422');
          expect(body.data.payload).toBeDefined();
        });
    });

    it('should fail with too long payload: /get-encrypt-data (POST)', () => {
      return request(app)
        .post('/get-encrypt-data')
        .send({
          payload: 'a'.repeat(2001),
        })
        .expect(422)
        .expect(({ body }) => {
          expect(body.successful).toBe(false);
          expect(body.error_code).toBe('422');
          expect(body.data.payload).toBeDefined();
        });
    });

    it('should successfully return an encrypt data: /get-encrypt-data (POST)', () => {
      return request(app)
        .post('/get-encrypt-data')
        .send({
          payload: testPayload,
        })
        .expect(200)
        .expect(({ body }) => {
          expect(body.successful).toBe(true);
          expect(body.error_code).toBe('200');
          expect(body.data.data1).toBeDefined();
          expect(body.data.data2).toBeDefined();
          encryptData = body.data;
        });
    });
  });

  describe('Get Decrypt Data', () => {
    it('should fail with non-payload: /get-decrypt-data (POST)', () => {
      return request(app)
        .post('/get-decrypt-data')
        .send({})
        .expect(422)
        .expect(({ body }) => {
          expect(body.successful).toBe(false);
          expect(body.error_code).toBe('422');
          expect(body.data.data1).toBeDefined();
          expect(body.data.data2).toBeDefined();
        });
    });

    it('should fail with one or another payload empty: /get-decrypt-data (POST)', () => {
      return request(app)
        .post('/get-decrypt-data')
        .send({
          data1: 'Tao',
          data2: '',
        })
        .expect(422)
        .expect(({ body }) => {
          expect(body.successful).toBe(false);
          expect(body.error_code).toBe('422');
          expect(body.data.data1).not.toBeDefined();
          expect(body.data.data2).toBeDefined();
        });
    });

    it('should fail with one or another payload incorrect: /get-decrypt-data (POST)', () => {
      return request(app)
        .post('/get-decrypt-data')
        .send({
          data1: 'Tao',
          data2: 'bin',
        })
        .expect(500)
        .expect(({ body }) => {
          expect(body.successful).toBe(false);
          expect(body.error_code).toBe('500');
          expect(body.data).toBe(null);
        });
    });

    it('should successfully return original data: /get-decrypt-data (POST)', () => {
      return request(app)
        .post('/get-decrypt-data')
        .send(encryptData)
        .expect(200)
        .expect(({ body }) => {
          expect(body.successful).toBe(true);
          expect(body.error_code).toBe('200');
          expect(body.data.payload).toEqual(testPayload);
        });
    });
  });
});
