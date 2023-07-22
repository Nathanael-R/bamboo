import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const DATA = [
  {
    id: 1,
    name: "Orange Juice",
    type: "Juice",
    ingredients: ["oranges", "water", "sugar"],
    price: 2.5,
    calories: 120,
    is_alcoholic: false,
  },
  {
    id: 2,
    name: "Mojito",
    type: "Cocktail",
    ingredients: ["white rum", "lime", "mint leaves", "sugar", "soda water"],
    price: 8.75,
    calories: 180,
    is_alcoholic: true,
  },
  {
    id: 3,
    name: "Iced Coffee",
    type: "Coffee",
    ingredients: ["coffee", "milk", "sugar", "ice"],
    price: 4.0,
    calories: 80,
    is_alcoholic: false,
  },
];


const MyStocks = () => {
  return (
    <View
      style={{ paddingTop: 30, paddingRight: 15, backgroundColor: "white" }}
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
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../assets/avah.png")}
        />
        <View>
          <Text>AVAH</Text>
          <Text>Aveanna Healthcare Holdings l...</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>UP</Text>
          <Text>6.02%</Text>
          <Text>($0.06)</Text>
          <Pressable>
            <Ionicons name="options" size={24} color="#00D084" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const WatchList = () => {
  return (
    <View
      style={{ paddingTop: 30, paddingRight: 15, backgroundColor: "white" }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Watchlist</Text>
        <Pressable>
          <Text>See All</Text>
        </Pressable>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../assets/avah.png")}
        />
        <View>
          <Text>AVAH</Text>
          <Text>Aveanna Healthcare Holdings l...</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>UP</Text>
          <Text>6.02%</Text>
          <Text>($0.06)</Text>
          <Pressable>
            <Ionicons name="options" size={24} color="#00D084" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const Featured = () => {
  const ListItem = ({ name, price }) => {
    return (
      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    <ListItem name={item.name} price={item.price} />;
  };
  //   const Item = ({ name, price }) => (
  //     <View style={{backgroundColor: 'red'}}>
  //       <Text>{name} </Text>
  //       <Text>{price} </Text>
  //     </View>
  //   );
  //   const renderItem = ({ item }) => (
  //     <Item title={item.name} description={item.price} />
  //   );

  return (
    <View
      style={{ paddingTop: 30, paddingRight: 15, backgroundColor: "white" }}
    >
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
      <View>
        <Text>Check out these categories to discover new stocks</Text>
        {/* <View>
          {DATA && <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />}
        </View> */}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.price}
        />
      </View>
    </View>
  );
};
const TopMovers = () => {
  return (
    <View
      style={{ paddingTop: 30, paddingRight: 15, backgroundColor: "white" }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Top Movers</Text>
          <Pressable>
            <Text>See All</Text>
          </Pressable>
        </View>
        <Text>These are the stocks making the biggest move today</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        pagingEnabled={true}
      >
        <View style={{ marginRight: 10 }}>
          <Cards />
        </View>
        <View style={{ marginRight: 10 }}>
          <Cards />
        </View>
        <View style={{ marginRight: 10 }}>
          <Cards />
        </View>
      </ScrollView>
    </View>
  );
};
const FeaturedThemes = () => {
  return (
    <View
      style={{ paddingTop: 30, paddingRight: 15, backgroundColor: "white" }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Watchlist</Text>
        <Pressable>
          <Text>See All</Text>
        </Pressable>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../assets/avah.png")}
        />
        <View>
          <Text>AVAH</Text>
          <Text>Aveanna Healthcare Holdings l...</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>UP</Text>
          <Text>6.02%</Text>
          <Text>($0.06)</Text>
          <Pressable>
            <Ionicons name="options" size={24} color="#00D084" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const FeaturedStocks = () => {
  return (
    <View
      style={{ paddingTop: 30, paddingRight: 15, backgroundColor: "white" }}
    >
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
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../assets/avah.png")}
        />
        <View>
          <Text>AVAH</Text>
          <Text>Aveanna Healthcare Holdings l...</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>UP</Text>
          <Text>6.02%</Text>
          <Text>($0.06)</Text>
          <Pressable>
            <Ionicons name="options" size={24} color="#00D084" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const RecentNews = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Recent News</Text>
        <Pressable>
          <Text>See All</Text>
        </Pressable>
      </View>
      <View>
        <View>
          <Text style={{ width: 220 }}>
            yutedtyjhugldjsehfcviulyktdyjrxfhmcgjvifldktucg kj
          </Text>
          <Text>2h ago</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="arrow-redo" size={24} color="green" />
            <Text>EIN News IT</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const Portfolio = () => {
  const { container } = styles;
  return (
    <View style={container}>
      {/* <Profile />
      <Cards />
      <Offers /> */}
      <MyStocks />
      <WatchList />
      <Featured />
      <TopMovers />
      <FeaturedThemes />
      <FeaturedStocks />
      <RecentNews />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00D084",
    paddingLeft: 15,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
    marginBottom: 20,
  },
});
export default Portfolio;
