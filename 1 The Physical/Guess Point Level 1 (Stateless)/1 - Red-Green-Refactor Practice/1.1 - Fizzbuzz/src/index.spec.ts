
import { fizzBuzz } from './fizzbuzz'

describe("fizzbuzz", () => {

    it('should throw an error if the input is out of range 1 to 100', () => {
        expect(() => fizzBuzz(0)).toThrow()
    })

    it.each([3, 6, 9, 12])
    ('should return Fizz for multiples of 3 and not multiple of 5', (input: number) => {
        const output = fizzBuzz(input)
        expect(output).toEqual('Fizz')
    })

    it.each([5, 10, 20, 25])
    ('should return Buzz for multiples of 5 and not multiple of 3', (input: number) => {
        const output = fizzBuzz(input)
        expect(output).toEqual('Buzz')
    })

    it.each([15, 30, 45, 60])
    ('should return FizzBuzz for multiples of 3 and 5', (input: number) => {
        const output = fizzBuzz(input)
        expect(output).toEqual('FizzBuzz')
    })

    it.each([
        [1, '1'],
        [2, '2'],
        [4, '4'],
        [7, '7']
    ])
    ('should return the input number as string if it is not multiple of 3 or 5', (input: number, result: string) => {
        const output = fizzBuzz(input)
        expect(output).toEqual(result)
    })
});
