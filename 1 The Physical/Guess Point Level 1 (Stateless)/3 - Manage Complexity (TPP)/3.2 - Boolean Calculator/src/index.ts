export class BooleanCalculator {
    static calculate(expression: string): boolean {
        expression = expression.replace(/\(/g, ' ( ')
        expression = expression.replace(/\)/g, ' ) ')

        const tokens = expression.split(' ').filter((token) => token)

        if (tokens.length === 1) {
            if (tokens[0] === 'TRUE') {
                return true
            }
    
            return false
        }

        const idxOpenParenthesis = tokens.lastIndexOf('(')
        const idxCloseParenthesis = tokens.indexOf(')', idxOpenParenthesis)

        if (idxOpenParenthesis != -1 && idxCloseParenthesis != -1) {
            return BooleanCalculator.applyParenthesisOperation(tokens, idxOpenParenthesis, idxCloseParenthesis)
        }

        const idxNot = tokens.indexOf('NOT')

        if (idxNot !== -1) {
            return BooleanCalculator.applyNotOperation(tokens, idxNot)
        }

        const idxAnd = tokens.indexOf('AND')

        if (idxAnd != -1) {
            return BooleanCalculator.applyAndOperation(tokens, idxAnd)
        }

        const idxOr = tokens.indexOf('OR')

        if (idxOr != -1) {
            return BooleanCalculator.applyOrOperation(tokens, idxOr)
        }

        return false
    }

    private static applyNotOperation(tokens: string[], idx: number) {
        tokens[idx + 1] = tokens[idx + 1] === 'TRUE' ? 'FALSE' : 'TRUE'
        tokens.splice(idx, 1)
        return BooleanCalculator.calculate(tokens.join(' '))
    }

    private static applyOrOperation(tokens: string[], idx: number) {
        if (tokens[idx - 1] === 'TRUE' || tokens[idx + 1] === 'TRUE') {
            tokens[idx - 1] = 'TRUE'
        } else {
            tokens[idx - 1] = 'FALSE'
        }

        tokens.splice(idx, 2)

        return BooleanCalculator.calculate(tokens.join(' '))
    }

    private static applyAndOperation(tokens: string[], idx: number) {
        if (tokens[idx - 1] === 'TRUE' && tokens[idx + 1] === 'TRUE') {
            tokens[idx - 1] = 'TRUE'
        } else {
            tokens[idx - 1] = 'FALSE'
        }

        tokens.splice(idx, 2)

        return BooleanCalculator.calculate(tokens.join(' '))
    }

    private static applyParenthesisOperation(tokens: string[], idxOpenParenthesis: number, idxCloseParenthesis: number) {
        const parenthesisExpression = tokens.slice(idxOpenParenthesis + 1, idxCloseParenthesis).join(' ')
        
        const result = BooleanCalculator.calculate(parenthesisExpression)

        tokens.splice(idxOpenParenthesis + 1, idxCloseParenthesis - idxOpenParenthesis + 1)
        tokens[idxOpenParenthesis] = result ? 'TRUE' : 'FALSE'
        
        return BooleanCalculator.calculate(tokens.join(' '))
    } 
}