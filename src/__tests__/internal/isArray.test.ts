import isArray from '../../internal/isArray';

test('测试isArray', () => {
    expect(isArray([])).toBe(true)
    expect(isArray({})).toBe(false)
    expect(isArray("")).toBe(false)
    expect(isArray(0)).toBe(false)
})
