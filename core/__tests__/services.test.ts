import services from '@/services.ts';

test('test mapped services object', () => {
  expect(services).toHaveProperty('storage');
  expect(services).toHaveProperty('config');
  expect(services).toHaveProperty('useCase');
  expect(services).toHaveProperty('util');
  expect(services).toHaveProperty('analytic');
});
