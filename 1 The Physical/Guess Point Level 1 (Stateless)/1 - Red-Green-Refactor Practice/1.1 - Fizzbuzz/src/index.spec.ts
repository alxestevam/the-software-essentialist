
import { fizzBuzz } from './fizzbuzz'

describe("fizzbuzz", () => {

    it('should throw an error if the input is out of range 1 to 100', () => {
        expect(() => fizzBuzz(0)).toThrow();      
    })
});
