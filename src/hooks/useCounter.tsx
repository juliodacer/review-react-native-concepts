import { useState } from 'react'

const useCounter = (initialValue: number = 10) => {

    const [value, setValue] = useState<number>(initialValue)

    const acumulate = (n: number) => {
        setValue(value + n)
    }

    return {
        value,
        acumulate
    }
}

export default useCounter