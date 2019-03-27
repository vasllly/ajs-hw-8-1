import Bowman from '../src/js/Bowman';

test('create Bowman', () => {
  const received = new Bowman();
  const expected = {
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
