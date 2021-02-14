import serialQuery from "../../UrlQuery/serialQuery"

test("serialQuery", () => {
  expect(serialQuery({
    q1: "abc",
    q2: "hello",
    q4: "444",
    q5: ""
  })).toBe("q1=abc&q2=hello&q4=444")

})