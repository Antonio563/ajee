function mult(a, b) {
  return a * b;
}

test('Produto 2 + 5', () => {
  expect(mult(2, 5)).toBe(10);
});
