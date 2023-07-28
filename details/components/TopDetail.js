import { View, Text, Image } from "react-native";
import React from "react";

const TopDetail = () => {
  return (
    <View style={{flexDirection: 'row', paddingVertical: 15}}>
      <View>
        <Image
          source={require("../../assets/avah.png")}
          style={{ height: 70, width: 70 }}
        />
      </View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 35}}>$1.75</Text>
        <Text>(~#1,534.75)</Text>
        <Text>MARKET CLOSED</Text>
      </View>
    </View>
  );
};

export default TopDetail;
