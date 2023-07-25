import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ThemeScroll } from "../components/FeaturedThemes";
import Search from "../components/invest/Search";
import List from "../components/cards/List";

const Invest = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 15,
        backgroundColor: "white",
      }}
    >
      <View>
        <Search />
        <ThemeScroll />
      </View>
      <Text style={{fontWeight: 'bold'}}>Featured Stocks</Text>
      <List />
    </ScrollView>
  );
};

export default Invest;
