import { View, Text, ScrollView } from "react-native";
import React from "react";
import Compare from "./components/Compare";
import Description from "./components/Description";
import TitleChart from "./components/TitleChart";

const LowerScreen = () => {
  return (
    <View style={{paddingHorizontal: 15}}>
      <Compare />
      <Description />
    </View>
  );
};
const Details = ({ item }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <TitleChart />
      <LowerScreen />
    </ScrollView>
  );
};

export default Details;
