export class MilitaryTimeValidator {
    static validate(timeRange: string) {
        const [start, end] = timeRange.split(' - ')

        if (!MilitaryTimeValidator.validateTime(start)) {
            return false;
        }

        if (!MilitaryTimeValidator.validateTime(end)) {
            return false;
        }

        return true
    }

    private static validateTime(timeString: string) {
        const [hour, minute] = timeString.split(':')

        if (Number(hour) > 23 || Number(hour) < 0) {
            return false
        }

        if (Number(minute) > 59 || Number(minute) < 0) {
            return false
        }

        return true
    }
}