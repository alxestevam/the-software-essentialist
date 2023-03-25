export class PasswordValidator {
    validate(value: string) {
        if (!this.isValidLength(value)) {
            return false
        }

        if (!this.containsAtLeastOneDigit(value)) {
            return false
        }

        if (!this.containsAtLeastOneUpperCaseLetter(value)) {
            return false
        }

        return true
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