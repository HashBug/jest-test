test("four plus four", () => {
  const num = 4 + 4;
  // toBe and toEqual are equivalent for numbers
  expect(num).toBe(8);
  expect(num).toEqual(8);

  expect(num).toBeGreaterThan(7);
  expect(num).toBeGreaterThanOrEqual(8);

  expect(num).toBeLessThan(9);
  expect(num).toBeLessThanOrEqual(8);
});

test("adding floating point numbers", () => {
  const n = 0.2 + 0.3;

  // Use toBeCloseTo instead of toBe or toEqual for floating points because of rounding errors
  expect(n).toBeCloseTo(0.5);
});
