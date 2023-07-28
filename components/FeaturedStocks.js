import { Image, Pressable, Text, View } from "react-native";
import List from "./cards/List"
import Header from "./topscreen/Header";
const FeaturedStocks = () => {
  return (
    <View style={{ paddingVertical: 25, paddingRight: 15 }}>
      <Header title= 'Featured Stocks'/>
      <List Details={'Details'}/>
    </View>
  );
};

export default FeaturedStocks;
