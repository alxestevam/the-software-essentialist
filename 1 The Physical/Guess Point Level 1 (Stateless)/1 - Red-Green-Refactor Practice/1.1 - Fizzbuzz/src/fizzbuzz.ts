const isMultipleOfThree = (number: number) => number % 3 === 0;

const isMultipleOfFive = (number: number) => number % 5 === 0;

const isOutOfRange = (number: number) => number < 1 || number > 100;

export function fizzBuzz(number: number) {
    if (isOutOfRange(number)) {
        throw new Error('Outside of range 1 to 100')
    }

    if (isMultipleOfThree(number) && isMultipleOfFive(number)) {
        return 'FizzBuzz'
    }

    if (isMultipleOfFive(number)) {
        return 'Buzz'
    }

    if (isMultipleOfThree(number)) {
        return 'Fizz'
    }

    return String(number)
}
