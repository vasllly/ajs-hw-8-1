import Undead from '../src/js/Undead';

test('create Undead', () => {
  const received = new Undead();
  const expected = {
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
