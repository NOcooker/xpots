import isEmpty from '../../internal/isEmpty';

test("isEmpty", () => {
  expect(isEmpty({})).toBe(true)

  expect(isEmpty([])).toBe(true)

  expect(isEmpty("")).toBe(true)

  expect(isEmpty(null)).toBe(true)

  expect(isEmpty(undefined)).toBe(true)

  expect(isEmpty(0)).toBe(false)

})