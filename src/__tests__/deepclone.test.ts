import deepClone from '../deepclone';

test("deepclone", () => {
  expect(deepClone([])).toStrictEqual([])
})