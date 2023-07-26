import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Wallet from '../components/account/Wallet'
import Payment from '../components/account/Payment'

const Account = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 15, backgroundColor: 'white' }}>
      {/* <Wallet /> */}
      <Payment />
    </ScrollView>
  )
}

export default Account