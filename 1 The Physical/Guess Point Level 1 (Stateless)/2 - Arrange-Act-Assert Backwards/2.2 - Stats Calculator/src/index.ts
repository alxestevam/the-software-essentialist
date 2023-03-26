export function calculateStats(values: number[]) {

    const min = values.reduce((prev, cur) => {
        if (prev < cur) {
            return prev
        } else {
            return cur
        }
    }, values[0])

    return {
        min
    }
}