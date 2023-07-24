import React from "react";
import { Image, Text, View} from "react-native";
import { AreaChart } from "react-native-svg-charts";
import { DATA } from "../utils/helper";

const HomeChart = () => {
  return (
    <View style={{ position: "relative" }}>
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 5,
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/avah.png")}
        />
        <View>
          <Text>$23.22</Text>
          <Text>Aveanna Healthcare Holdings l...</Text>
        </View>
      </View>
      <AreaChart
        style={{
          height: 200,
          marginRight: 15,
          borderRadius: 5,
          backgroundColor: "white",
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,
        }}
        data={DATA}
        gridMin={-100}
        gridMax={120}
        start={-100}
        contentInset={{ top: 70 }}
        svg={{ fill: "rgba(57,214,136,0.1)", stroke: "rgb(57,214,136)" }}
      ></AreaChart>
    </View>
  );
};

export default HomeChart;
