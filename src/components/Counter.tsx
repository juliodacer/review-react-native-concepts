import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const Counter = () => {

    const [value, setValue] = useState<number>(0)

    const acumulate = (n: number) => {
        setValue(value + n)
    }

    return (
        <>
            <View>
                <Text style={{ fontSize: 20 }}>Contador: {value}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ padding: 10, margin: 10, backgroundColor: 'red' }}
                        onPress={() => acumulate(10)}
                    >
                        <Text style={{ color: 'white' }}>+1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10, margin: 10, backgroundColor: 'green' }}>
                        <Text style={{ color: 'white' }}>-1</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
