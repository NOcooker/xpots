import deepClone from '../deepclone';

test("deepclone", () => {
  expect(deepClone(null)).toStrictEqual(null)

  expect(deepClone('abc')).toStrictEqual('abc')

  // 如果是函数，这个判断[ function anonymous ]不知道咋写
  // expect(deepClone(function() {
  //   return true
  // })).toStrictEqual({})

  expect(deepClone(new Date())).toStrictEqual(new Date())

  expect(deepClone(new RegExp(/a/g))).toStrictEqual(/a/g)

  expect(deepClone([])).toStrictEqual([])

  expect(deepClone({
    a: 1,
    b: 2,
  })).toStrictEqual({
    a: 1,
    b: 2,
  })
})