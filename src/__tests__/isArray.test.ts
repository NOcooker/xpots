import isArray from '../../lib/internal/isArray';

test('测试isArray', () => {
    expect(isArray([])).toBe(true)
    expect(isArray({})).toBe(false)
    expect(isArray("")).toBe(false)
    expect(isArray(0)).toBe(false)
})
