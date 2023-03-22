import { PalindromeChecker } from './index'


describe('palindrome checker', () => {
    let sut: PalindromeChecker;

    beforeEach(() => {
        sut = new PalindromeChecker();
    })

    it.each(['mom', 'wow'])
    ('should return true if the input is a palindrome', (input: string) => {
        const output = sut.check(input)
        expect(output).toEqual(true)
    })

    it.each(['bill'])
    ('should return false if the input is not a palindrome', (input: string) => {
        const output = sut.check(input)
        expect(output).toEqual(false)
    })
    
  
})