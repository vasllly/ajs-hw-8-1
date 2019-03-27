import Zombie from '../src/js/Zombie';

test('create Zombie', () => {
  const received = new Zombie();
  const expected = {
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
