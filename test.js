import { checkHealthStatus } from './herohealth';

test('health test - critical', () => {
  const character = { name: 'Маг', health: 3 };
  const health = checkHealthStatus(character);
  expect(health).toBe('critical');
});

test('health test - wounded', () => {
  const character = { name: 'Маг', health: 30 };
  const healthStatus = checkHealthStatus(character);
  expect(healthStatus).toBe('wounded');
});

test('health test - healthy', () => {
  const character = { name: 'Маг', health: 78 };
  const health = checkHealthStatus(character);
  expect(health).toBe('healthy');
});
