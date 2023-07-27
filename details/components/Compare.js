import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Octicons, SimpleLineIcons } from "@expo/vector-icons";
const Compare = () => {
  const { container } = styles;
  return (
    <View style={{paddingVertical: 10}}>
      <Pressable style={container}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Octicons name="arrow-switch" size={20} color="#00D084" />
          <Text>Compare Stocks</Text>
        </View>
        <SimpleLineIcons name="arrow-right" size={15} color="#00D084" />
      </Pressable>
      <Pressable style={container}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Octicons name="bell" size={20} color="#00D084" />
          <Text>Price Alerts</Text>
        </View>
        <SimpleLineIcons name="arrow-right" size={15} color="#00D084" />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15
  },
});
export default Compare;
