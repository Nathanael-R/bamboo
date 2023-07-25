import { View, Text, FlatList } from "react-native";
import React from "react";

const Payment = () => {
  const DATA = [
    {
      id: 1,
      title: "Direct Wallet Top-up",
      desc: "Fund your wallet by transferring from anywhere",
    },
    {
      id: 2,
      title: "Brokerage Account Funding",
      desc: "Fund your Brokerage Account by transferring from anywhere with USD",
    },
  ];

  const Item = ({ item }) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(57,214,136,0.1)", height: 80, marginBottom: 10 }}>
        <Text style={{ color: "#00D084" }}>{item.title}</Text>
        <Text>{item.desc}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Payment;
