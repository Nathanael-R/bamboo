import { View, Text, Pressable } from "react-native";
import React from "react";
const BottomModal = ({toggle}) => {
  return (
    <View style={{backgroundColor: 'white', gap: 5}}>
      <Text style={{textAlign: 'center'}}>Wallet transfer</Text>
      <Text style={{textAlign: 'center'}}>How would you like to make a transfer?</Text>
      <View style={{gap: 5}}>
      <Text>NGN Wallet to USD Wallet</Text>
      <Text>USD Wallet to NGN Wallet</Text>
      <Pressable onPress={toggle}><Text>Close</Text></Pressable>
      </View>
    </View>
  );
};

export default BottomModal;
