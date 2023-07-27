import { Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Help from "../screens/Help";
import Learn from "../screens/Learn";
import Invest from "../screens/Invest";
import Profile from "./topscreen/Profile";
import AccountContainer from "./topscreen/AccountContainer";
import Details from "../details/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#00D084",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: "#00D084",
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "#00D084",
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"home-sharp"}
              size={25}
              color={focused ? "#00D084" : "black"}
            />
          ),
          headerTitle: (props) => <Profile {...props} />,
        }}
      />
      <Tab.Screen
        name={"Invest"}
        component={Invest}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name={"arrow-switch"}
              size={25}
              color={focused ? "#00D084" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Learn"}
        component={Learn}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"book"}
              size={25}
              color={focused ? "#00D084" : "black"}
              B
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Help"}
        component={Help}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"chatbox-ellipses-sharp"}
              size={25}
              color={focused ? "#00D084" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Account"}
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"person"}
              size={25}
              color={focused ? "#00D084" : "black"}
            />
          ),
          headerTitle: (props) => <AccountContainer {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Tabs = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Tabs;
