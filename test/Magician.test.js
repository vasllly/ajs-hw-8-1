import Magician from '../src/js/Magician';

test('create Magician', () => {
  const received = new Magician('Маг');
  const expected = {
    name: 'Маг',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
