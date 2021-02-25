import {union, intersect } from "calc"
import React, { useState } from "react";
import {NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select, Grid, Text, Alert } from "@chakra-ui/core"
import { isValid } from "./validation";

export type ProbFunctions = "union" | "intersect"

export function getProbFn(s: ProbFunctions) {
    switch(s) {
        case "intersect": return intersect;
        case "union": return union;
    }
}

const Selector: React.FC<{value: ProbFunctions, setValue: (s: ProbFunctions) => void}> = ({ value, setValue}) => 
    <Select onChange={v => { console.log(v);  v.target.value === "a" ? setValue("union") : setValue("intersect")}}>
        <option value="a" selected={value === "union"} >Either A or B (union)</option>
        <option value="b" selected={value === "intersect"}>Combined A and B (intersect)</option>
    </Select>

const ProbabilityInput: React.FC<{value: number, setValue: (v: number) => void}> = ({value, setValue}) =>
    <NumberInput size="lg" step={0.02} defaultValue={value} min={0} max={1} onChange={n => typeof n === "string" ? setValue(parseFloat(n)) : setValue(n) } >
        <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
    </NumberInput>

const Calculator = () => {
    const [mode, setMode] = useState("union" as ProbFunctions)
    const [a, setA] = useState(0.5)
    const [b, setB] = useState(0.5)

    const probFn = getProbFn(mode)
    
    const validationResult = isValid(a, b)

    return <Grid templateColumns="1fr minmax(25rem, 3fr)" gap={3}>
        <Text>Function</Text>
        <Selector value={mode} setValue={setMode} />
        <Text>A</Text>
        <ProbabilityInput value={a} setValue={setA} />
        <Text>B</Text>
        <ProbabilityInput value={b} setValue={setB} />
        <Text>Result</Text>
        {validationResult === "valid" 
            ? <Alert status="success">{probFn(a, b)} </Alert>
            : <Alert status="error">{validationResult.value}</Alert>}
    </Grid>
}

export default Calculator