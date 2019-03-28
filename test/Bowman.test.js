import Bowman from '../src/js/Bowman';

test('create Bowman', () => {
  const received = new Bowman('Лучник');
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
