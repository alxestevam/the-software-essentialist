function calculateMin(values: number[]) {
    return values.reduce((prev, cur) => prev < cur ? prev : cur, values[0])
}

function calculateMax(values: number[]) {
    return values.reduce((prev, cur) => prev > cur ? prev : cur, values[0])
}

export function calculateStats(values: number[]) {

    const min = calculateMin(values)
    const max = calculateMax(values)

    return {
        min,
        max
    }
}