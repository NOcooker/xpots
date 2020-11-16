import hello from '../hello';

test('hello', () => {
    expect(hello('Carl')).toBe('Hello Carl')
})
