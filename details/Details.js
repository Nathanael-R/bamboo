import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import About from "./screens/About";
import Financials from "./screens/Financials";
import Ownership from "./screens/Ownership";
import News from "./screens/News";

const Tab = createMaterialTopTabNavigator()

const Details = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor:  "white", borderBottomWidth: 0},
        headerStyle: {borderBottomColor: 'white'},
        tabBarIndicatorStyle: {backgroundColor: '#00D084'}
      }}
      initialRouteName="About"
    >
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Financials" component={Financials} />
      <Tab.Screen name="Ownership" component={Ownership} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  )
};

export default Details;
