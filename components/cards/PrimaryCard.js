import { Pressable, Text, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PrimaryCard = () => {
  let cardWidth = Dimensions.get("window").width - 45;
  return (
    <View
      style={{
        display: "flex",
        backgroundColor: "white",
        padding: 15,
        width: (cardWidth),
        gap: 15,
        borderRadius: 5,
        marginRight: 15
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Stocks</Text>
        <Ionicons name="eye-off" size={24} />
      </View>
      <View style={{ display: "flex", gap: 10 }}>
        <Text style={{ fontSize: 25 }}>
          $<Text style={{ fontSize: 40, fontWeight: "bold" }}>1</Text>.00
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              backgroundColor: "red",
              color: "white",
              display: "flex",
              alignItems: "center",
              padding: 1,
              height: 15,
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            DOWN
          </Text>
          <Text style={{ color: "red" }}>$0.01</Text>
          <Text style={{ color: "red" }}>(0.99%)</Text>
          <Text>TODAY</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#00D084",
            height: 45,
            borderRadius: 5,
            width: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: 'bold' }}>Buy a stock</Text>
        </Pressable>
        <Text>Portfolio breakdown</Text>
      </View>
    </View>
  );
};

export default PrimaryCard;
