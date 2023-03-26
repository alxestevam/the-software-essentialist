
import { calculateStats } from './index'

describe('stats calculator', () => {
    it.each([
        [[2, 4, 21, -8, 53, 40], -8],
    ])('should return the minimum value in the array', (input: number[], result: number) => {
        const stats = calculateStats(input)
        expect(stats.min).toEqual(result)
    })

})