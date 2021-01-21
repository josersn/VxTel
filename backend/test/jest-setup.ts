import { SetupServer } from '@src/serve';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});
