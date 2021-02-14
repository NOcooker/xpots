import isRegExp from "../../internal/isRegExp"

test("isRegExp", () => {
  expect(isRegExp(new RegExp(/1/g))).toBe(true)
})