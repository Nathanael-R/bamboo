import { Image, Pressable, Text, View } from "react-native";
import List from "./cards/List";
import Header from "./topscreen/Header";
const MyStocks = () => {
  return (
    <View
      style={{ paddingTop: 30, paddingRight: 15}}
    >
      <Header title='My Stocks'/>
      <List Details={'Details'}/>
    </View>
  );
};
export default MyStocks;
