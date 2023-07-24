import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProfileContainer from "./topscreen/ProfileContainer";
import MyOffers from "./combined/MyOffers";
import WatchList from "./WatchList";
import FeaturedThemes from "./FeaturedThemes";
import TopMovers from "./TopMovers";
import MonthStock from "./stocks/MonthStock";
import FeaturedStocks from "./FeaturedStocks";
import RecentNews from "./RecentNews";
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
const Portfolio = () => {
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
  },
});
export default Portfolio;
