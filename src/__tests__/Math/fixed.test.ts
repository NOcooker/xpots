import fixed from "../../Math/fixed"

test("fixed", () => {
  expect(fixed(10000, 3, true)).toBe("10,000.000");
  expect(fixed("")).toBe("0.00");
  expect(fixed("", 0)).toBe("0");
  expect(fixed(233.68, 5)).toBe("233.68000");
  expect(fixed(123.45, 0)).toBe("123");
  expect(fixed(123.45, -2)).toBe("123");
})