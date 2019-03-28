import Undead from '../src/js/Undead';

test('create Undead', () => {
  const received = new Undead('Нежить');
  const expected = {
    name: 'Нежить',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
