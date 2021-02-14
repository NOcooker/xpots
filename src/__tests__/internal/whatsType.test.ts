import whatsType from "../../internal/whatsType"

test("测试类型", () => {
  expect(whatsType({}, "Object")).toBe(true)
  expect(whatsType([], "Array")).toBe(true)
  expect(whatsType(new Date(), "Date")).toBe(true)
  expect(whatsType(() => {}, "Function")).toBe(true)
  expect(whatsType(null, "Null")).toBe(true)
  expect(whatsType(new RegExp(/1/g), "RegExp")).toBe(true)
})