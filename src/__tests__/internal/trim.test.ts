import trim from "../../internal/trim"

test("trim", () => {
  expect(trim(" abc ")).toBe("abc")
  expect(trim(" a b c ")).toBe("a b c")
  expect(trim("")).toBe("")
})