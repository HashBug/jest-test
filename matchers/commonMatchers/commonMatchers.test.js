test("adds 2 and 2 to Equal 4", () => {
  expect(2 + 2).toBe(4);
});

//Object Assignment
test("object assignment", () => {
  const data = { one: 1 };
  data["five"] = 5;
  // toEqual recursively checks every field of an object or array.
  expect(data).toEqual({ one: 1, five: 5 });
});

// Not Equal
test("addding positive number is not zero", () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});
