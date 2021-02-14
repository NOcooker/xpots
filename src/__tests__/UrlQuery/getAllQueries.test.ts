import getAllQueries from "../../UrlQuery/getAllQueries";

test("getAllQueries", () => {
  expect(getAllQueries("http://www.aaa.com/path?q1=11&q2=22&q3=33")).toStrictEqual({
    q1: "11",
    q2: "22",
    q3: "33"
  })

  expect(getAllQueries("http://www.aaa.com/path?q1=&q2=22&q3=33")).toStrictEqual({
    q2: "22",
    q3: "33"
  })

  expect(getAllQueries("http://www.aaa.com/path")).toStrictEqual({})

  expect(getAllQueries("http://www.aaa.com/path?q1=0&q2=22")).toStrictEqual({
    q1: "0",
    q2: "22"
  })
})