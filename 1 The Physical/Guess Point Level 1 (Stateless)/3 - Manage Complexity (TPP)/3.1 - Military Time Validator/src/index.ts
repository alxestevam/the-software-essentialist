export class MilitaryTimeValidator {
    static validate(timeRange: string) {
        const [start, end] = timeRange.split(' - ')

        const [startHour, startMinute] = start.split(':')

        if (Number(startHour) > 23) {
            return false
        }

        if (Number(startMinute) > 59) {
            return false
        }

        return true
    }
}