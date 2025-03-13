const { square } = require('./square');


describe('square', () => {

test('square 5 to get 25', () => {
    expect(square(5)).toBe(25);
   });

if('can correctly square a positive number', () => {
    expect(square(5)).toBe(25);
});
if('can correctly square a negative number', () => {
    expect(square(-10)).toBe(100);
});
if('return an error if given a string', () => {
    expect(square('string')).toBe(NaN);
});
   //use npm test to run test files

})

describe('squareRoot', () => {
    if('can corretly square root a positive number', () => {
        expect(squareRoot(81)).toBe(9);
    });

    if('returns NaN error if given a negative number', () => {
        expect(squareRoot(81)).toBe(NaN);
    });

    if('throw an error if given a string', () => {
    });
});