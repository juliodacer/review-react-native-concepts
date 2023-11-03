import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import useCounter from '../hooks/useCounter'

export const CounterWithHook = () => {

    const { value, acumulate } = useCounter(30)

    return (
        <>
            <View>
                <Text style={{ fontSize: 20 }}>Contador: {value}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => acumulate(3)}
                        style={{ padding: 10, margin: 10, backgroundColor: 'red' }}
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
