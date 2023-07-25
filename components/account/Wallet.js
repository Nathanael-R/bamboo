import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Wallet = () => {
  return (
    <View >
      <View style={{ alignItems: "center", paddingVertical: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Nathanael</Text>
        <Text style={{ fontWeight: "light" }}>
          USER ID: #NATHANAEL AA56YT7UI8
        </Text>
      </View>
      <View>
        <Text>USD WALLET</Text>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>$0.00</Text>
      </View>
      <View>
        <Ionicons
          name="arrow-up"
          size={24}
          color="white"
          style={{
            backgroundColor: "#00D084",
            height: 40,
            width: 40,
            padding: 5,
            borderRadius: 100,
            textAlign: "center",
            alignSelf: "flex-end",
          }}
        />
      </View>
      <View>
        <Text>NGN WALLET</Text>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>#20</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
        }}
      >
        <Pressable
          style={{
            flex: 0.49,
            backgroundColor: "red",
            alignItems: "center",
            paddingVertical: 10,
            borderRadius: 5,
          }}
        >
          <Text>Withdraw</Text>
        </Pressable>
        <Pressable
          style={{
            flex: 0.49,
            backgroundColor: "#00D084",
            alignItems: "center",
            paddingVertical: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Deposit</Text>
        </Pressable>
      </View>
      <Text style={{ textAlign: "center", color: "#00D084" }}>
        Show transaction history
      </Text>
    </View>
  );
};

export default Wallet;
