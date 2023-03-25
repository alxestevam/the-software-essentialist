export class PasswordValidator {
    validate(value: string) {
        const errors = []

        if (!this.isValidLength(value)) {
            errors.push('Invalid length')
        }

        if (!this.containsAtLeastOneDigit(value)) {
            errors.push('The password provided does not have at least one digit')
        }

        if (!this.containsAtLeastOneUpperCaseLetter(value)) {
            errors.push('The password provided does not have at least one upper case letter')
        }

        if (errors.length) {
            return {
                result: false,
                errors,
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