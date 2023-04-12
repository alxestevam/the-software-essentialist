export class MilitaryTimeValidator {
    static validate(timeRange: string) {
        const [start, end] = timeRange.split(' - ')

        const [startHour, startMinute] = start.split(':')

        if (Number(startHour) > 23 || Number(startHour) < 0) {
            return false
        }

        if (Number(startMinute) > 59 || Number(startMinute) < 0) {
            return false
        }

        return true
    }
}