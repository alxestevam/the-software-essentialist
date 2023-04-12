import { MilitaryTimeValidator } from './index'

describe('military time validator', () => {
    it("should return true if the range is '01:12 - 14:32'", () => {
        expect(MilitaryTimeValidator.validate('01:12 - 14:32')).toEqual(true)
    })

    it("should return false if the range starts with a time with an hour greater than 24", () => {
        expect(MilitaryTimeValidator.validate('25:00 - 12:23')).toEqual(false)
    })

    it('should return false if the range starts with a time with more than 59 minutes', () => {
        expect(MilitaryTimeValidator.validate('20:60 - 12:23')).toEqual(false)
    })
})
