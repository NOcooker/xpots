import noFakeParams from "../noFakeParams";

test("noFakeParams", () => {
  expect(noFakeParams({
    a: 1,
    b: null,
    c: "",
    d: 0
  })).toStrictEqual({
    a: 1,
    d: 0
  })
})