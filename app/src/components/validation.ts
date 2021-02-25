
export type ValidationResult = 
    "valid"
    | { type: "error", value: string}

const createError = (s: string) => ({type: "error" as const, value: s})

export const isValid = (a: number, b: number): ValidationResult => {
    if(a < 0)
        return createError(`invalid value ${a}. A must be between 0 and 1`)
    if(a > 1)
        return createError(`invalid value ${a}. A must be between 0 and 1`)
    if(b < 0)
        return createError(`invalid value ${b}. B must be between 0 and 1`)
    if(b > 1)
        return createError(`invalid value ${b}. B must be between 0 and 1`)
    // obvious refactoring opportunity here
    return "valid"
}