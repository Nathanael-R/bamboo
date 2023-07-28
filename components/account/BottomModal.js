import { View, Text, Pressable } from "react-native";
import React from "react";
import { BottomSheet } from "react-native-btr";
const BottomModal = ({toggle}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text>Wallet transfer</Text>
      <Text>How would you like to make a transfer?</Text>
      <View>
      <Text>NGN Wallet to USD Wallet</Text>
      <Text>USD Wallet to NGN Wallet</Text>
      <Pressable onPress={toggle}>Close</Pressable>
      </View>
    </View>
  );
};

export default BottomModal;
