//Use toMatch for matching strings

test("there is no I in team", () => {
  const str = "team";
  expect(str).not.toMatch(/I/);
});

test('but there is "Stop" in christopher', () => {
  const str = "christopher";
  expect(str).toMatch(/stop/);
});
