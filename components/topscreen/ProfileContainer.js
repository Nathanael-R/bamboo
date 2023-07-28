import React from "react";
import PrimaryCard from "../cards/PrimaryCard";
import { ScrollView, StatusBar, View } from "react-native";

const ProfileContainer = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#00D084",
        paddingLeft: 15,
        paddingBottom: 15,
        paddingTop: StatusBar.currentHeight || 0,
        paddingRight: 15
      }}
      horizontal={true}
    >
      <PrimaryCard />
      <PrimaryCard />
    </ScrollView>
  );
};

export default ProfileContainer;
