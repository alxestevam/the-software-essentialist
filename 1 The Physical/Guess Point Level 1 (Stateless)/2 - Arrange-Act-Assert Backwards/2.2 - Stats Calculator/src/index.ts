function calculateMin(values: number[]) {
    return values.reduce((prev, cur) => prev < cur ? prev : cur, values[0])
}

export function calculateStats(values: number[]) {

    const min = calculateMin(values)

    return {
        min
    }
}