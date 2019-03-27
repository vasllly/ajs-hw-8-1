import Daemon from '../src/js/Daemon';

test('create Daemon', () => {
  const received = new Daemon();
  const expected = {
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
