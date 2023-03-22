export class PalindromeChecker {
    check(string: string) {
        return string.toLowerCase()
                     .replace(/\s/g, '')
                     .split('')
                     .reverse()
                     .join('') === string.toLowerCase().replace(/\s/g, '')
    }
}