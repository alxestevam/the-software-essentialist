
import { fizzBuzz } from './fizzbuzz'

describe("fizzbuzz", () => {

    it('should throw an error if the input is out of range 1 to 100', () => {
        expect(() => fizzBuzz(0)).toThrow()
    })

    it.each([3, 6, 9, 12])
    ('should return Fizz for multiples of 3', (input: number) => {
        const output = fizzBuzz(input)
        expect(output).toEqual('Fizz')
    })
});
