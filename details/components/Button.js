import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = () => {
  return (
    <View
      style={{
        position: "fixed",
        bottom: 0,
        justifyContent: "space-between",
        marginHorizontal: 15,
        flexDirection: "row",
        flex: 1,
        paddingVertical: 15
      }}
    >
      <TouchableOpacity
        style={{ backgroundColor: "#00D084", height: 50, flex: 0.49 }}
      >
        <Text>Sell</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#00D084", height: 50, flex: 0.49}}
      >
        <Text>Sell</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
