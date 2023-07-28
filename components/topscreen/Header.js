import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15
        }}
      >
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
        <Pressable>
          <Text style={{fontWeight: 'bold', color: '#00D084'}}>See All</Text>
        </Pressable>
      </View>
  )
}

export default Header