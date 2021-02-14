import replaceQuery from "../../UrlQuery/replaceQuery"

test("replaceQuery", () => {
  expect(replaceQuery("http://www.aaa.com/path?q1=11&q2=22&q3=33", {
    q1: "abc",
    q2: "hello",
    q4: "444"
  })).toBe("http://www.aaa.com/path?q1=abc&q2=hello&q3=33&q4=444")

})