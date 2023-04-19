export class BooleanCalculator {
    static calculate(expression: string): boolean {
        const tokens = expression.split(' ')

        if (tokens.length === 1) {
            if (tokens[0] === 'TRUE') {
                return true
            }
    
            return false
        }

        const idxNot = tokens.indexOf('NOT')

        if (idxNot !== -1) {
            tokens.splice(idxNot, 1)
            tokens[idxNot] = tokens[idxNot] === 'TRUE' ? 'FALSE' : 'TRUE'

            return BooleanCalculator.calculate(tokens.join(' '))
        }

        const idxOr = tokens.indexOf('OR')

        if (idxOr != -1) {
            if (tokens[idxOr - 1] === 'TRUE' || tokens[idxOr + 1] === 'TRUE') {
                return true
            }

            return false
        }

        const idxAnd = tokens.indexOf('AND')

        if (idxAnd != -1) {
            if (tokens[idxAnd - 1] === 'TRUE' && tokens[idxAnd + 1] === 'TRUE') {
                return true
            }
            return false
        }

        return false
    }
}