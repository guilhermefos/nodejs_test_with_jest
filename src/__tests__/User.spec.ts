import request from 'supertest';
import { isUuid } from 'uuidv4';
import app from '../app';

describe('User', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app).post('/user').send({
      email: 'user@devtipsbr.com',
      name: 'user',
      password: '12341234',
      confirmPassword: '12341234',
    });

    expect(isUuid(response.body.id)).toBe(true);

    expect(response.body).toMatchObject({
      email: 'user@devtipsbr.com',
      name: 'user',
    });
  });
});
