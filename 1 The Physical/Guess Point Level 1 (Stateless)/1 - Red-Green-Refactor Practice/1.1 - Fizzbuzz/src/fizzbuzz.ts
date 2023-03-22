export function fizzBuzz(number: number) {
    if (number < 1 || number > 100) {
        throw new Error('Outside of range 1 to 100')
    }

    if (number % 5 === 0) {
        return 'Buzz'
    } 
    
    return 'Fizz'
}