import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Help from "../screens/Help";
import Learn from "../screens/Learn";
import Invest from "../screens/Invest";
import Profile from "./topscreen/Profile";

const Tab = createBottomTabNavigator();

import "react-native-gesture-handler";
import {
  Button,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AccountContainer from "./topscreen/AccountContainer";

const Tabs = () => {
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["25%", "50%", "100%"];

  function Help() {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <View
            style={[
              styles.container,
              { backgroundColor: isOpen ? "gray" : "white" },
            ]}
          >
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              backgroundStyle={{ borderRadius: 25 }}
              onDismiss={() => setIsOpen(false)}
            >
              <View style={styles.contentContainer}>
                <View
                  style={{
                    width: width,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderBottomColor: "gray",
                    marginVertical: 30,
                    zIndex: 2,
                  }}
                />
                <Text style={[styles.title, { width: "100%" }]}>Theme</Text>
              </View>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "gray",
      alignItems: "center",
      justifyContent: "center",
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 15,
    },
    row: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    title: {
      fontWeight: "900",
      letterSpacing: 0.5,
      fontSize: 16,
    },
    subtitle: {
      color: "#101318",
      fontSize: 14,
      fontWeight: "bold",
    },
    description: {
      color: "#56636F",
      fontSize: 13,
      fontWeight: "normal",
      width: "100%",
    },
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#00D084",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0
        },
        headerStyle: {
          backgroundColor: "#00D084",
          borderBottomWidth: 0
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
          headerTitle: (props) => <Profile {...props}/>
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
        B    />
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
              onPress={handlePresentModal}
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
        <Tab.Screen name='Modal' component={Modal} screenOptions={{presentation: 'modal'}}/>
    </Tab.Navigator>
  );
};

export default Tabs;
