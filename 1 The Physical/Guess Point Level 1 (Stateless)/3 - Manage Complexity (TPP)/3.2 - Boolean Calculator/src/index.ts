export class BooleanCalculator {
    static calculate(expression: string) {
        if (expression === 'TRUE') {
            return true
        }

        if (expression === 'FALSE') {
            return false
        }

        if (expression.includes('NOT')) {
            return expression.slice(4) !== 'TRUE'
        }

        if (expression.includes('OR')) {
            if (expression.includes('TRUE')) {
                return true
            }
            return false
        }

        if (expression.includes('AND')) {
            if (!expression.includes('FALSE')) {
                return true
            }
            return false
        }

    }
}