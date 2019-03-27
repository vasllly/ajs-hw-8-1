import Swordsman from '../src/js/Swordsman';

test('create Swordsman', () => {
  const received = new Swordsman();
  const expected = {
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
