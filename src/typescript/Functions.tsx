import { Text } from "react-native"

export const Functions = () => {

    const sumar = (a: number, b: number) => {
        return [a + b]
    }

    return (<>
        <Text> Funciones  </Text>
        <Text>El resultado es: {sumar(10, 5)}</Text>
    </>)
}