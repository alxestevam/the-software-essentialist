export class BooleanCalculator {
    static calculate(expression: string) {
        const value = expression.includes('TRUE')

        if (expression.includes('NOT')) {
            return !value
        }
        
        return value
    }
}