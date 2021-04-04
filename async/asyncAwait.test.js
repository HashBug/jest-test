function fetchData() {
  const p = new Promise((resolve, reject) => {
    resolve("data");
  });

  return p;
}

function fetchFail() {
  const p = new Promise((resolve, reject) => {
    reject("error");
  });
  return p;
}

test("async await resolves in data", async () => {
  const data = await fetchData();
  expect(data).toBe("data");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchFail();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the data is fetched", async () => {
  expect(fetchData()).resolves.toBe("data");
});

test("fetch fails with an error", async () => {
  expect(fetchFail()).rejects.toMatch("error");
});
