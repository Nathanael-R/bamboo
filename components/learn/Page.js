import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { LearnData } from "../utils/helper";
const Page = () => {
  const renderComp = ({item}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'rgb(248,248,255)', borderTopWidth: 1, borderTopColor: 'rgb(248,248,255)', paddingVertical: 10, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <FontAwesome name="money" size={16} color="#00D084" />
          <Text>{item.desc}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00D084" />
      </View>
    );
  };
  return (
    <ScrollView style={{padding: 15}}>
      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Want to master the market and the Bamboo app? We're here to help!
      </Text>
      <FlatList 
      data={LearnData}
      renderItem={renderComp}
      key={({item}) => item.id}
      />
    </ScrollView>
  );
};

export default Page;
