import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProfileContainer from "../components/topscreen/ProfileContainer";
import MyOffers from "../components/combined/MyOffers";
import WatchList from "../components/WatchList";
import FeaturedThemes from "../components/FeaturedThemes";
import TopMovers from "../components/TopMovers";
import MonthStock from "../components/stocks/MonthStock";
import FeaturedStocks from "../components/FeaturedStocks";
import RecentNews from "../components/RecentNews";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NewCom = createNativeStackNavigator()
const Contain = () => {
  return (
    <View style={{ paddingLeft: 15 }}>
      <MyOffers />
      <WatchList />
      <FeaturedThemes />
      <TopMovers />
      <MonthStock />
      <FeaturedStocks />
      <RecentNews />
    </View>
  );
};
const Home = () => {
  const { container } = styles;
  return (
    <ScrollView style={container}>
      <ProfileContainer />
      <Contain />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
export default Home;
