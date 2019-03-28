import Zombie from '../src/js/Zombie';

test('create Zombie', () => {
  const received = new Zombie('Зомби');
  const expected = {
    name: 'Зомби',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
