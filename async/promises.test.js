test("promise is resolved", () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 500);
  });
  return expect(myPromise).resolves.toBe("hello");
});

test("promise is rejected", () => {
  const p = Promise.reject("error");
  return expect(p).rejects.toMatch("error");
});

function addPromise(a, b) {
  const p = new Promise((resolve) => {
    resolve(a + b);
  });
  return p;
}

test("promise returns 3+4 = 7", () => {
  return addPromise(3, 4).then((data) => {
    expect(data).toBe(7);
  });
});
