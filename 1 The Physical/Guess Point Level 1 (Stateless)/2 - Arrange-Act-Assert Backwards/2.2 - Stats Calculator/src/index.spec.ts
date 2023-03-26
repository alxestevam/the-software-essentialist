
import { calculateStats } from './index'

describe('stats calculator', () => {
    it.each([
        [[2, 4, 21, -8, 53, 40], -8],
        [[1, 2, 3, 4, 5, 6], 1],
        [[3, 4, -2, 7, 10, 4], -2],
    ])('should return the minimum value in the array', (input: number[], result: number) => {
        const stats = calculateStats(input)
        expect(stats.min).toEqual(result)
    })

    it.each([
        [[2, 4, 21, -8, 53, 40], 53],
        [[1, 2, 3, 4, 5, 6], 6],
        [[3, 4, -2, 7, 10, 4], 10],
    ])('should return the maximum value in the array', (input: number[], result: number) => {
        const stats = calculateStats(input)
        expect(stats.max).toEqual(result)
    })

})