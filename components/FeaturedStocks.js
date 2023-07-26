import { Image, Pressable, Text, View } from "react-native";
import List from "./cards/List";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FeaturedStocks = () => {
  const navigation = createNativeStackNavigator()
  
  return (
    <View style={{ paddingTop: 15, paddingRight: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Featured Stocks</Text>
        <Pressable>
          <Text>See All</Text>
        </Pressable>
      </View>
      <List navigation={navigation} screenName={'Modal'}/>
    </View>
  );
};

export default FeaturedStocks;
