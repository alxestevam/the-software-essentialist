
import { BooleanCalculator } from './index'

describe('boolean calculator', () => {
    describe('single values', () => {
        it('should return true if the input is TRUE', () => {
            expect(BooleanCalculator.calculate('TRUE')).toBe(true)
        })
    
        it('should return false if the input is FALSE', () => {
            expect(BooleanCalculator.calculate('FALSE')).toBe(false)
        })
    })

    describe('NOT operator', () => {
        it('should return false if the input is "NOT TRUE"', () => {
            expect(BooleanCalculator.calculate('NOT TRUE')).toBe(false)
        })
    
        it('should return true if the input is "NOT FALSE"', () => {
            expect(BooleanCalculator.calculate('NOT FALSE')).toBe(true)
        })
    })

    describe('AND operator', () => {
        it('should return false if the input is "TRUE AND FALSE"', () => {
            expect(BooleanCalculator.calculate('TRUE AND FALSE')).toBe(false)
        })

        it('should return true if the input is "TRUE AND TRUE"', () => {
            expect(BooleanCalculator.calculate('TRUE AND TRUE')).toBe(true)
        })

        it('should return false if the input is "FALSE AND TRUE"', () => {
            expect(BooleanCalculator.calculate('FALSE AND TRUE')).toBe(false)
        })

    })
   
})
