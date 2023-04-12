export class MilitaryTimeValidator {
    static validate(range: string) {
        if (!MilitaryTimeValidator.isValidRangeFormat(range)) {
            return false
        }

        const [start, end] = range.split(' - ')

        if (!MilitaryTimeValidator.validateTime(start)) {
            return false;
        }

        if (!MilitaryTimeValidator.validateTime(end)) {
            return false;
        }

        return true
    }

    private static isValidRangeFormat(range: string) {
        return range.match(/^\d\d:\d\d - \d\d:\d\d$/)
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