import getQuery from "../../UrlQuery/getQuery"

test("getquery", () => {
  expect(getQuery("q2", "http://www.aaa.com/path?q1=11&q2=22&q3=33")).toBe("22")

  expect(getQuery("q4", "http://www.aaa.com/path?q1=11&q2=22&q3=33")).toBe(null);


})