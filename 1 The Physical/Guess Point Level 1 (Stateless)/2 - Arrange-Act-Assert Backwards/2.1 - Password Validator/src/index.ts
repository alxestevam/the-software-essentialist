export class PasswordValidator {
    validate(string: string) {
        if (string.length < 5 || string.length > 15) {
            return false
        }

        if (!string.match(/\d/)) {
            return false
        }

        if (!string.match(/[A-Z]/)) {
            return false
        }

        return true
    }
}