import { root, square } from './';

describe('utils', function () {
    describe('square method', function () {
        it('should return `25` when called with `5`', () => {
            const result = square(5);
            const expectedResult = 25;

            expect(result).toBe(expectedResult);
        });
    });

    describe('root method', function () {
        it('should return `5` when called with `25`', () => {
            const result = root(25);
            const expectedResult = 5;

            expect(result).toBe(expectedResult);
        });
    });
});
