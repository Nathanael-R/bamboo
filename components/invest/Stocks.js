import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import List from '../cards/List'
import { ThemeScroll } from '../FeaturedThemes'
import Search from './Search'

const Stocks = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 15,
        backgroundColor: "white",
      }}
    >
      <View>
        <Search />
        <ThemeScroll />
      </View>
      <Text style={{fontWeight: 'bold'}}>Featured Stocks</Text>
      <List />
    </ScrollView>
  )
}

export default Stocks