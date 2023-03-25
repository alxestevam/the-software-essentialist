export class PasswordValidator {
    validate(value: string) {
        if (!this.isValidLength(value)) {
            return {
                result: false
            }
        }

        if (!this.containsAtLeastOneDigit(value)) {
            return {
                result: false
            }
        }

        if (!this.containsAtLeastOneUpperCaseLetter(value)) {
            return {
                result: false
            }
        }

        return {
            result: true
        }
    }

    private isValidLength(value: string) {
        return value.length >= 5 && value.length <= 15
    }

    private containsAtLeastOneDigit(value: string) {
        return !!value.match(/\d/)
    }

    private containsAtLeastOneUpperCaseLetter(value: string) {
        return !!value.match(/[A-Z]/)
    }
}