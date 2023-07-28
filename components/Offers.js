import { Dimensions, ScrollView, Text, View } from "react-native";

const Offers = () => {
  let secondaryCardWidth = Dimensions.get("window").width - 45;
  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
        Special Offers
      </Text>
      <ScrollView pagingEnabled horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "#acb0f7",
            marginRight: 15,
            width: secondaryCardWidth,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", marginBottom: 5, fontWeight: "bold" }}>
            Introducing Fixed Returns
          </Text>
          <Text
            style={{
              maxWidth: 200,
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            An easy way to invest and get dollar returns. Do nothing and watch
            your money grow
          </Text>
        </View>
        <View
          style={{
            marginRight: 15,
            width: secondaryCardWidth,
            backgroundColor: "red",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", marginBottom: 5 }}>
            Introducing Fixed Returns
          </Text>
          <Text style={{ maxWidth: 200, color: "white" }}>
            An easy way to invest and get dollar returns. Do nothing and watch
            your money grow
          </Text>
        </View>
        <View
          style={{
            width: secondaryCardWidth,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "green",
            marginRight: 10,
          }}
        >
          <Text style={{ color: "white", marginBottom: 5 }}>
            Introducing Fixed Returns
          </Text>
          <Text style={{ maxWidth: 200, color: "white" }}>
            An easy way to invest and get dollar returns. Do nothing and watch
            your money grow
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Offers;
