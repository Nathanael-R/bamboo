import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View, useWindowDimensions } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { TouchableOpacity } from "react-native";
const WatchCard = ({item, Details}) => {
  const navigation = useNavigation()
  const width = useWindowDimensions()
  let screen = width.width - 30
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: screen, 
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: 'rgb(248,248,255)'
      }}
      onPress={() => navigation.navigate(Details)}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 50, width: 50 }}
          source={item.image}
        />
        <View>
          <Text>{item.name}</Text>
          <Text style={{ fontSize: 10, fontWeight: "light" }}>
            {item.desc}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            backgroundColor: "red",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: 1,
            height: 15,
            fontSize: 10,
            fontWeight: "bold",
          }}
        >
          {item.status}
        </Text>
        <Text style={{ color: "red" }}>{item.percentage}%</Text>
        <Pressable>
          <Ionicons name="options" size={24} color="#00D084" />
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

export default WatchCard;
