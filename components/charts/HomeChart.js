import React from 'react'
import { Image, View } from 'react-native'
import { AreaChart } from 'react-native-svg-charts'

const HomeChart = ({DATA}) => {
  return (
    <View style={{ position: "relative" }}>
        <View
          style={{
            position: "absolute",
            top: 0,
            zIndex: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            style={{ height: 50, width: 50 }}
            source={require("../assets/avah.png")}
          />
          <View>
            <Text>$23.22</Text>
            <Text>Aveanna Healthcare Holdings l...</Text>
          </View>
        </View>
        <AreaChart
          style={{ height: 200, backgroundColor: "white" }}
          data={DATA}
          gridMin={-100}
          gridMax={120}
          start={-100}
          contentInset={{ top: 70 }}
          svg={{ fill: "rgba(57,214,136)", stroke: "rgb(57,214,136)" }}
        ></AreaChart>
      </View>
  )
}

export default HomeChart