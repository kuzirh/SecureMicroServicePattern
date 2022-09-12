import { handler } from './index';

describe('#hello world lambda', () => {
  it('should load the handler', async () => {
    await handler();
    expect(1).toBe(1);
  });
});
