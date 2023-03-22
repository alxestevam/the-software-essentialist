const reverse = (string: string) => {
  return string.split("").reverse().join("")
};

const removeSpaces = (string: string) => {
  return string.replace(/\s/g, "")
};

export class PalindromeChecker {
  check(string: string) {
    const original = removeSpaces(string.toLowerCase())
    const reversed = reverse(removeSpaces(string.toLowerCase()))

    return original === reversed
  }
}
