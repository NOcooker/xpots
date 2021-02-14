import isNull from "../../internal/isNull"

test("isNull", () => {
  expect(isNull(null)).toBe(true)
})