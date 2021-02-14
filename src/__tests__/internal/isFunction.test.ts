import isFunction from "../../internal/isFunction"

test("isFunction", () => {
  expect(isFunction(()=>{})).toBe(true)
})