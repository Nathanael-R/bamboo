import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { ThemeCopy } from "./utils/helper";
import Header from "./topscreen/Header";

export const ThemeScroll = () => {
  return (
    <ScrollView
      horizontal={true}
      style={{ paddingVertical: 15 }}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row" }}>
        {ThemeCopy.map((item) => (
          <Item item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const Item = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: randomColor(),
        marginRight: 5,
        flexDirection: "row",
        height: 35,
        borderRadius: 5,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={item.image} style={{ height: 20, width: 20 }} />
      <Text>{item.desc}</Text>
    </View>
  );
};
function randomColor() {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}
const FeaturedThemes = () => {
  return (
    <View>
      <View style={{ paddingRight: 15 }}>
        <Header title='Featured Themes'/>
        <Text>These are the stocks making the biggest move today</Text>
      </View>
      <ThemeScroll />
    </View>
  );
};

export default FeaturedThemes;
