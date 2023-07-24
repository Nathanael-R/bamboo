import { Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SecondList = ({item}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/avah.png")}
        />
        <View>
          <Text>{item.name}</Text>
          <Text style={{ fontSize: 10, fontWeight: "light" }}>
            {item.desc}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
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
        <Text style={{ color: "red" }}>{item.percentage}%</Text>
        <Pressable>
          <Ionicons name="options" size={24} color="#00D084" />
        </Pressable>
      </View>
    </View>
  );
};

export default SecondList;
