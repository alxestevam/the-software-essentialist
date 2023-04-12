import { MilitaryTimeValidator } from './index'

describe('military time validator', () => {
    it("should return true if the range is '01:12 - 14:32'", () => {
        expect(MilitaryTimeValidator.validate('01:12 - 14:32')).toEqual(true)
    })
    
    it("should return false if the range is '25:00 - 12:23'", () => {
        expect(MilitaryTimeValidator.validate('25:00 - 12:23')).toEqual(false)
    })

    it("should return true if the range is '22:00 - 23:12'", () => {
        expect(MilitaryTimeValidator.validate('22:00 - 23:12')).toEqual(true)
    })

    it("should return false if the range starts with a time with an hour greater than 23", () => {
        expect(MilitaryTimeValidator.validate('24:00 - 12:23')).toEqual(false)
    })

    it('should return false if the range starts with a time with more than 59 minutes', () => {
        expect(MilitaryTimeValidator.validate('20:60 - 12:23')).toEqual(false)
    })

    it("should return false if the range starts with a negative hour", () => {
        expect(MilitaryTimeValidator.validate('-20:00 - 12:23')).toEqual(false)
    })

    it("should return false if the range starts with a negative minute", () => {
        expect(MilitaryTimeValidator.validate('20:-10 - 12:23')).toEqual(false)
    })

    it("should return false if the range ends with a time with an hour greater than 23", () => {
        expect(MilitaryTimeValidator.validate('20:00 - 24:00')).toEqual(false)
    })

    it("should return false if the range ends with a time with more than 59 minutes", () => {
        expect(MilitaryTimeValidator.validate('20:00 - 23:60')).toEqual(false)
    })
    
    it("should return false if the range ends with a negative hour", () => {
        expect(MilitaryTimeValidator.validate('20:00 - -12:23')).toEqual(false)
    })

    it("should return false if the range ends with a negative minute", () => {
        expect(MilitaryTimeValidator.validate('20:00 - 12:-23')).toEqual(false)
    })

    it("should return false if the range is not in 'dd:dd - dd:dd' format. ('d' means digit)", () => {
        expect(MilitaryTimeValidator.validate('20:00 - 12:aa')).toEqual(false)
    })
})
