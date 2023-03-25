import { PasswordValidator } from './index'


describe('password validator', () => {
    let sut: PasswordValidator

    beforeEach(() => {
        sut = new PasswordValidator()
    })

    it('should return false if length is not between 5 and 15 characters', () => {
        const output = sut.validate('');
        expect(output).toEqual(false)
    })

    it('should return false if it does not have at least one digit', () => {
        const output = sut.validate('abcde');
        expect(output).toEqual(false)
    })

    it('should return true if it is a valid password', () => {
        const output = sut.validate('A12345')
        expect(output).toEqual(true)
    })

    it('should return false if it does not have at least one upper case letter', () => {
        const output = sut.validate('abc123')
        expect(output).toEqual(false)
    })
})


