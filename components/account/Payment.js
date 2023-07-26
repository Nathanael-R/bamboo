// import { View, Text, FlatList, StyleSheet } from "react-native";
// import React from "react";
// import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
// const Payment = () => {
//   const DATA = [
//     {
//       id: 1,
//       title: "Direct Wallet Top-up",
//       desc: "Fund your wallet by transferring from anywhere",
//     },
//     {
//       id: 2,
//       title: "Brokerage Account Funding",
//       desc: "Fund your Brokerage Account by transferring from anywhere with USD",
//     },
//   ];
//   const Options = [
//     {
//       id: 1,
//       desc: "Invite a Friend",
//       iconName: "person-add",
//     },
//     {
//       id: 2,
//       desc: "Write a Review",
//       iconName: "chatbox-ellipses",
//     },
//     {
//       id: 3,
//       desc: "KYC Status",
//       iconName: "person-add",
//     },
//   ];
//   const Set = [
//     {
//       id: 1,
//       desc: "Account Statements",
//       iconName: "person-add",
//     },
//     {
//       id: 2,
//       desc: "Tax Documents",
//       iconName: "chatbox-ellipses",
//     },
//     {
//       id: 3,
//       desc: "Trade Confimations",
//       iconName: "person-add",
//     },
//   ];
//   const { container, firstText, secondText } = styles;
//   const Item = ({ item }) => {
//     return (
//       <View style={[container]}>
//         <FontAwesome
//           name="building"
//           size={20}
//           color={item.id == 1 ? "green" : "red"}
//         />
//         <View style={{ width: 250 }}>
//           <Text
//             style={[
//               item.id == 1 ? firstText : secondText,
//               { fontWeight: "bold" },
//             ]}
//           >
//             {item.title}
//           </Text>
//           <Text style={[item.id == 2 && secondText]}>{item.desc}</Text>
//         </View>
//         <MaterialIcons name="keyboard-arrow-right" size={24} />
//       </View>
//     );
//   };

//   const RenderItem = ({ item }) => {
//     return (
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           borderBottomWidth: .01,
//           borderBottomColor: 'grey',
//           marginBottom: 2,
//           alignItems: "center",
//         }}
//       >
//         <View
//           style={{
//             width: 250,
//             flexDirection: "row",
//             gap: 10,
//             height: 50,
//             alignItems: "center",
//           }}
//         >
//           <Ionicons name={item.iconName} size={20} color="#00D084" />
//           <Text>{item.desc}</Text>
//         </View>
//         <MaterialIcons name="keyboard-arrow-right" size={24} color="#00D084" />
//       </View>
//     );
//   };
//   return (
//     <View>
//       <View>
//         <FlatList
//           data={DATA}
//           renderItem={({ item }) => <Item item={item} />}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//       <View style={{marginBottom: 50}}>
//         <Text style={{ marginBottom: 15, fontWeight: 'bold' }}>Bamboo</Text>
//         <FlatList
//           data={Options}
//           renderItem={({ item }) => <RenderItem item={item} />}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//       <View>
//         <Text style={{ marginBottom: 15, fontWeight: 'bold' }}>Bamboo</Text>
//         <FlatList
//           data={Set}
//           renderItem={({ item }) => <RenderItem item={item} />}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     backgroundColor: "rgba(57,214,136,0.1)",
//     height: 80,
//     marginBottom: 10,
//     flexDirection: "row",
//     paddingHorizontal: 15,
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   firstText: {
//     color: "#00D084",
//   },
//   secondText: {
//     color: "blue",
//   },
// });
// export default Payment;

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        onPress={() => navigation.navigate('EditPost')}
        title="Go to Edit Post"
      />
    </View>
  );
}

function EmptyScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={EmptyScreen} />
    </Tab.Navigator>
  );
}

function Payment() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="EditPost" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Payment;
