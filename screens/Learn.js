import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import QSG from "../components/learn/components/QSG";
import Glossary from "../components/learn/components/Glossary";
import SMB from "../components/learn/components/SMB";
import BTB from "../components/learn/components/BTB";

const Learn = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontSize: 12,
          color: "white",
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarStyle: { backgroundColor: "#00D084" },
        tabBarIndicatorStyle: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen name="Quick Start Guide" component={QSG} />
      <Tab.Screen name="Glossary" component={Glossary} />
      <Tab.Screen name="Stock Market Basics" component={SMB} />
      <Tab.Screen name="Beyond the Basics" component={BTB} />
    </Tab.Navigator>
  );
};

export default Learn;
