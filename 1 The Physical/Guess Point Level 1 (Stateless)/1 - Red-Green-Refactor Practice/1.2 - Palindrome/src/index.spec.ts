import { PalindromeChecker } from './index'


describe('palindrome checker', () => {
    let sut: PalindromeChecker;

    beforeEach(() => {
        sut = new PalindromeChecker();
    })

    it('should return true if mom is an input', () => {
        const output = sut.check('mom')
        expect(output).toEqual(true)
    })

    it('should return true if wow is an input', () => {
        const output = sut.check('wow')
        expect(output).toEqual(true)
    })

    it('should return false if bill is an input', () => {
        const output = sut.check('bill')
        expect(output).toEqual(false)
    })
    
  
})