import Magician from '../src/js/Magician';

test('create Magician', () => {
  const received = new Magician();
  const expected = {
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
