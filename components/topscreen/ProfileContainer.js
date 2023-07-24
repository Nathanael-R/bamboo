import React from "react";
import Profile from "./Profile";
import PrimaryCard from "../cards/PrimaryCard";
import { StatusBar, View } from "react-native";

const ProfileContainer = () => {
  return (
    <View
      style={{
        backgroundColor: "#00D084",
        paddingLeft: 15,
        paddingBottom: 15,
        paddingTop: StatusBar.currentHeight || 0,
      }}
    >
      <Profile />
      <PrimaryCard />
    </View>
  );
};

export default ProfileContainer;
