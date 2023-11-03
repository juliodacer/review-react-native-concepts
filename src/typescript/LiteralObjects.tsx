import React from 'react'
import { Text } from 'react-native'

interface Persona {
    fullName: string,
    age: number,
    address: Address
}

interface Address {
    country: string,
    numHouse: number
}

// const persona = new Persona() -> Para esto se necesita crear una clase

const LiteralObjects = () => {

    const persona: Persona = {
        fullName: 'Julio',
        age: 27,
        address: {
            country: 'Canada',
            numHouse: 615
        }
    }

    persona.fullName = '123123'

    return (
        <>
            <Text>Objeto literales</Text>
            <Text>
                {
                    JSON.stringify(persona, ['name'], 2) // replace: arreglo de los campos que queremos
                }
            </Text>
        </>
    )
}

export default LiteralObjects