import { View, Text } from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'
const AccountContainer = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Text>
        Account
      </Text>
      <FontAwesome name='gear' size={20} color='white'/>
    </View>
  )
}

export default AccountContainer