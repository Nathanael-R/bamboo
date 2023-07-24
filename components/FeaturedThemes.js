import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { ThemeCopy } from "./utils/helper";

const FeaturedThemes = () => {
  function randomColor() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }

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
  return (
    <View>
      <View style={{ paddingRight: 15 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Featured Themes</Text>
          <Pressable>
            <Text>See All</Text>
          </Pressable>
        </View>
        <Text>These are the stocks making the biggest move today</Text>
      </View>
      <ScrollView horizontal={true} style={{paddingVertical: 5 }} showsHorizontalScrollIndicator={false}>
        {/* <FlatList
          data={ThemeCopy}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={16}
        /> */}
        <View style={{flexDirection: 'row'}}>
          {ThemeCopy.map((item) => (
            <Item item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FeaturedThemes;
