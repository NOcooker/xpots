import isDate from "../../internal/isDate"

test("isDate", () => {
  expect(isDate(new Date())).toBe(true)
  expect(isDate(1613273083591)).toBe(false)
})