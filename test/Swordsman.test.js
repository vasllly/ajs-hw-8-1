import Swordsman from '../src/js/Swordsman';

test('create Swordsman', () => {
  const received = new Swordsman('Мечник');
  const expected = {
    name: 'Мечник',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
