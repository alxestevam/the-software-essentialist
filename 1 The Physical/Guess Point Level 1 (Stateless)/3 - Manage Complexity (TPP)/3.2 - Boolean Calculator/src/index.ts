export class BooleanCalculator {
    static calculate(expression: string) {
        const value = expression.includes('TRUE')

        if (expression.includes('NOT')) {
            return !value
        }

        if (expression.includes('AND')) {
            return false
        }

        return value
    }
}