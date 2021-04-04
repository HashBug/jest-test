function addAsync(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
}

test("add numbers async", (done) => {
  function callback(data) {
    try {
      expect(data).toBe(9);
      done();
    } catch (error) {
      done(error);
    }
  }
  addAsync(4, 5, callback);
});
