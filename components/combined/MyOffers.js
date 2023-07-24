import React from 'react'
import { View } from 'react-native'
import Offers from '../Offers'
import MyStocks from '../MyStocks'

const MyOffers = () => {
  return (
    <View >
        <Offers />
        <MyStocks />
    </View>
  )
}

export default MyOffers