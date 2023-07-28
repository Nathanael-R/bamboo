import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Returns from "../components/invest/Returns";
import Stocks from "../components/invest/Stocks";

const Tab = createMaterialTopTabNavigator();
const Invest = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: 'white', fontWeight: 'bold', },
        tabBarStyle: { backgroundColor:  "#00D084"},
        tabBarIndicatorStyle: {backgroundColor: 'white'}
      }}
    >
      <Tab.Screen name="Stocks" component={Stocks} />
      <Tab.Screen name="Fixed Returns" component={Returns} />
    </Tab.Navigator>
  );
};

export default Invest;
