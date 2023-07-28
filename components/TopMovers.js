import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Header from "./topscreen/Header";

const Card = () => {
  return (
    <View
      style={{
        display: "flex",
        gap: 10,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 25,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        marginBottom: 20,
        marginRight: 15
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text
          style={{
            backgroundColor: "#00D084",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: 1,
            height: 15,
            fontSize: 10,
            fontWeight: "bold",
          }}
        >
          UP
        </Text>
        <Text style={{ fontSize: 25, color: "#00D084" }}>50.30%</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("../assets/avah.png")}
          style={{ height: 30, width: 30 }}
        />
        <View>
          <Text>DWAC</Text>
          <Text>$20.08</Text>
        </View>
      </View>
    </View>
  );
};
const TopMovers = () => {
  return (
    <View
      style={{
        display: "flex",
        gap: 5,
        paddingVertical: 30,
        paddingRight: 15,
        backgroundColor: "white",
      }}
    >
      <View style={{}}>
        <Header title='Top Movers'/>
        <Text>These are the stocks making the biggest move today</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
      <Card />
      <Card />
      <Card />
      <Card />
      </ScrollView>
    </View>
  );
};

export default TopMovers;
