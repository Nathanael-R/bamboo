import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";

const Returns = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 15,
        backgroundColor: "white",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", gap: 40 }}>
        <Text>Get up to 8%</Text>
        <Text>DOLLAR RETURNS EASY</Text>
        <Text>EARN UP TO 8% DOLLAR RETURNS</Text>
        <Text>
          Grow wealth the easy way. With Bamboo Fixed Returns, we take all the
          work out of investing while you earn all the rewards
        </Text>
        <Pressable>
          <Text style={{ backgroundColor: "#00D084", color: "white" }}>
            Start Investing
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Returns;
