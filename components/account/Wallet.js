import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
import BottomModal from "./BottomModal";

const Wallet = () => {
  const [sheet, setSheet] = useState(false)
  function toggleDrawer(){
    setSheet(!sheet)
  }
  return (
    <View style={{paddingBottom: 20}}>
      <View style={{ alignItems: "center", paddingVertical: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize:20 }}>Nathanael</Text>
        <Text style={{ fontWeight: "light" }}>
          USER ID: #NATHANAEL AA56YT7UI8
        </Text>
      </View>
      <View>
        <Text>USD WALLET</Text>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}>$0.00</Text>
      </View>
      <Pressable onPress={toggleDrawer}>
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
      </Pressable>
      <BottomSheet visible={sheet} onBackButtonPress={toggleDrawer} onBackdropPress={toggleDrawer}>
        <BottomModal toggle={toggleDrawer}/>
      </BottomSheet>
      <View>
        <Text>NGN WALLET</Text>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}>#20</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
          alignItems: 'center'
        }}
      >
        <Pressable
          style={{
            flex: 0.49,
            alignItems: "center",
            paddingVertical: 15,
            borderRadius: 5,
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
            height: 55
          }}
        >
          <Text>Withdraw</Text>
        </Pressable>
        <Pressable
          style={{
            flex: 0.49,
            backgroundColor: "#00D084",
            alignItems: "center",
            paddingVertical: 15,
            borderRadius: 5,
            height: 50
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
