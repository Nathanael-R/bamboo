import { View, Text } from "react-native";
import React, { useState } from "react";
import { AreaChart, LineChart } from "react-native-svg-charts";
import { DATA } from "../../components/utils/helper";
import { TouchableWithoutFeedback } from "react-native";
const TitleChart = () => {
  const [chart, setChart] = useState(false);
  return (
    <View>
      <Text style={{paddingHorizontal: 15}}>
        Welcome to Aveanna Healthcare Holdings, a leading and innovative
        healthcare company dedicated to enhancing lives through compassionate
        care and cutting-edge solutions. With a relentless commitment to
        excellence
      </Text>
      <TouchableWithoutFeedback onPress={() => setChart(!chart)}>
        {!chart ? (
          <LineChart
            style={{
              height: 200,
              backgroundColor: "white",
            }}
            data={DATA}
            gridMin={-100}
            gridMax={120}
            start={-100}
            contentInset={{ top: 70 }}
            svg={{ stroke: "rgb(57,214,136)" }}
          />
        ) : (
          <AreaChart
            style={{
              height: 200,
              backgroundColor: "white",
            }}
            data={DATA}
            gridMin={-100}
            gridMax={120}
            start={-100}
            contentInset={{ top: 70 }}
            svg={{ stroke: "rgb(57,214,136)", fill: "rgba(57,214,136,0.1)" }}
          />
        )}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TitleChart;
