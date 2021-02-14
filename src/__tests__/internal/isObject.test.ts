import isObject from "../../internal/isObject"

test("isObject", () => {
  expect(isObject({})).toBe(true)
})