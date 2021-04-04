const shoppingList = ["apple", "jam", "rice", "banana", "juice", "pizza"];
test("shopping list has pizza on it", () => {
  expect(shoppingList).toContain("pizza");
});

test("shopping list has pizza on it", () => {
  expect(new Set(shoppingList)).toContain("pizza");
});
