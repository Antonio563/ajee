function sum(a, b) {
  return a + b;
}

test('soma 1 + 1', () => {
  expect(sum(1, 1)).toBe(2);
});
