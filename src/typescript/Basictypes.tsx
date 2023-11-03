import { View, Text } from 'react-native'
import React from 'react'

const Basictypes = () => {
  let nombre: string | number = 'Fernando'
  nombre.toLowerCase()
  nombre = 1234

  return (
    <View>
      <Text>Basictypes</Text>
    </View>
  )
}

export default Basictypes