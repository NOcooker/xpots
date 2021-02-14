import formatDate from "../formatDate";

test("formatDate", () =>{
  expect(formatDate("1613018297850", "yyyy/MM/dd")).toBe("")

  expect(formatDate(1613141798583, "yyyy:MM:dd")).toBe("2021:02:12")

  expect(formatDate("")).toBe("")

  expect(formatDate(0)).toBe("")

  expect(formatDate(1)).toBe("1970-01-01")
})