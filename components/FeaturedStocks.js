import { Image, Pressable, Text, View } from "react-native";
import List from "./cards/List";
const FeaturedStocks = () => {
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
      <List />
    </View>
  );
};

export default FeaturedStocks;
