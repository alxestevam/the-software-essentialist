import { PalindromeChecker } from './index'


describe('palindrome checker', () => {
    it('should return true if mom is an input', () => {
        const sut = new PalindromeChecker()
        const output = sut.check('mom')
        expect(output).toEqual(true)
    })
  
})