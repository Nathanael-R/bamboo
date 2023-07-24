import { Image, Pressable, Text, View } from "react-native";
import List from "./cards/List";
const MyStocks = () => {
  return (
    <View
      style={{ paddingTop: 30, paddingRight: 15}}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>My Stocks</Text>
        <Pressable>
          <Text>See All</Text>
        </Pressable>
      </View>
      <List />
    </View>
  );
};
export default MyStocks;
