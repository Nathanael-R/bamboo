import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

const Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions()
  return (
    <View style= {{flexDirection: 'row', height: 64}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [5, 20, 5],
            extrapolate: 'clamp'
        })

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [.2, 1 , 1 ],
            extrapolate: 'clamp'
        })
        return <Animated.View style={[styles.dot, {width: dotWidth, opacity}]} key={i.toString()} />
      })} 
    </View>
  )
}
const styles = StyleSheet.create({
    dot: {
        height: 5,
        borderRadius: 5,
        backgroundColor: '#00D084', 
        marginHorizontal: 5,
    }
})
export default Paginator
