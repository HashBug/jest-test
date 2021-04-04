function someFailingCode() {
  throw new Error("This code always throws an Error!");
}

test("failing code works as expected", () => {
  // It throws something
  expect(() => someFailingCode()).toThrow();

  //It throws an Error
  expect(() => someFailingCode()).toThrow(Error);

  // Match the Error message thrown
  expect(() => someFailingCode()).toThrow("This code always throws an Error!");

  // thrown Error message contains match
  expect(() => someFailingCode()).toThrow(/Error/);
});
