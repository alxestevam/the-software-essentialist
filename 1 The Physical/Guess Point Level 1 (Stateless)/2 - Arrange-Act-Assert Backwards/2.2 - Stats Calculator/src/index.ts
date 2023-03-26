function calculateMin(values: number[]) {
    return values.reduce((prev, cur) => prev < cur ? prev : cur, values[0])
}

function calculateMax(values: number[]) {
    return values.reduce((prev, cur) => prev > cur ? prev : cur, values[0])
}

function calculateAvg(values: number[]) {
    const sum = values.reduce((prev, cur) => prev + cur, 0)
    return sum / values.length
}

export function calculateStats(values: number[]) {

    const min = calculateMin(values)
    const max = calculateMax(values)
    const avg = calculateAvg(values)

    return {
        min,
        max,
        avg
    }
}