
import { calculateStats } from './index'

describe('stats calculator', () => {
    it('should return the minimum value in the array', () => {
        const stats = calculateStats([2, 4, 21, -8, 53, 40])
        expect(stats.min).toEqual(-8)
    })

})