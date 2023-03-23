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
})


