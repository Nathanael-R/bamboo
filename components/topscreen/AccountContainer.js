import { View, Text, Dimensions } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const AccountContainer = () => {
  const width = Dimensions.get("window").width - 35;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: width,
        justifyContent: "space-between",
      }}
    >
      <Text style={{fontWeight: 'bold', color: 'white'}}>Account</Text>
      <FontAwesome name="gear" size={20} color="white" />
    </View>
  );
};

export default AccountContainer;
