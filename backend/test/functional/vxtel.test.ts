import supertest from 'supertest';

describe('dashboard VxTel  functional test', () => {
  it('Should return a data about prices', async () => {
    const { body, status } = await global.testRequest.get('/pricing');
    expect(status).toBe(200);
    expect(body).toEqual([
      {
        origin: 11,
        to: 16,
        pricePerTime: 1.9,
        duration: 20,
        plan: 1,
        withPlan: 0,
        withOut: 38,
      }
    ]);
  });
});
