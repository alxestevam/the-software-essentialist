
import { BooleanCalculator } from './index'

describe('boolean calculator', () => {
    it('should return true if the input is TRUE', () => {
        expect(BooleanCalculator.calculate('TRUE')).toBe(true)
    })

    it('should return false if the input is FALSE', () => {
        expect(BooleanCalculator.calculate('FALSE')).toBe(false)
    })
})
