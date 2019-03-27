import Character from '../src/js/Character';

test('create Character', () => {
  const received = new Character();
  const expected = {};
  expect(received).toEqual(expected);
});
