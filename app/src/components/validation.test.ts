import { isValid } from "./validation"

describe("validation", () => {
    // This should be done with property test really
    it("valid combination should return valid -", () => {
        const res = isValid(0.3, 0.1)

        expect(res).toEqual("valid")
    })

    it("a is out of bounds -", () => {
        const res = isValid(-42, 0.2)

        expect(res).not.toEqual("valid")
    })
    it("a is out of bounds +", () => {
        const res = isValid(396543242342090, 0.2)

        expect(res).not.toEqual("valid")
    })
    it("b is out of bounds", () => {
        const res = isValid(1, 99923123131231421)

        expect(res).not.toEqual("valid")
    })
})