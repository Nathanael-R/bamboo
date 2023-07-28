import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
const Search = () => {
  return (
    <View>
      <Text style={{textAlign: 'center', paddingVertical: 15}}>Search Stocks</Text>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          backgroundColor: "whitesmoke",
          paddingHorizontal: 10,
        }}
      >
        <Ionicons name="search" size={20} style={{ marginRight: 5 }} />
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 10,
          }}
          placeholder="Search"
          cursorColor="#00D084"
        />
        <Feather name="x" size={16} color="#00D084" />
      </View>
    </View>
  );
};

export default Search;
