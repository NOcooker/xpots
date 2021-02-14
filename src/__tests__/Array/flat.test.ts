import flatArray from "../../Array/flat"

test("flatArray", () => {
  expect(flatArray([[1], [2]])).toStrictEqual([1, 2]);
  expect(flatArray([[1], [2]], 2)).toStrictEqual([1, 2]);
  expect(flatArray([[1], [2, 3, [4, 5]]], 3)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(flatArray([[1], [2, 3, [4, 5]]], 2)).toStrictEqual([1, 2, 3, [4, 5]]);
})