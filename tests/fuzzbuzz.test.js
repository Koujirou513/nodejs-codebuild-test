const fizzbuzz = require('../src/fizzbuzz');

test('returns Fizz for multiples of 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
});

test('returns Buzz for multiples of 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(10)).toBe('Buzz');
});

test('returns FizzBuzz for multiples of 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(30)).toBe('FizzBuzz');
});

test('returns the number for non-multiples of 3 or 5', () => {
    expect(fizzbuzz(1)).toBe('1');
    expect(fizzbuzz(2)).toBe('2');
    expect(fizzbuzz(4)).toBe('4');
});
