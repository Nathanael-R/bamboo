import { Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const RecentNews = () => {
  const trim = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <View
      style={{ paddingTop: 30, paddingRight: 15, display: "flex", gap: 20 }}
    >
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: "center",
        }}
      >
        <View style={{ display: "flex", gap: 2 }}>
          <Text style={{ maxWidth: 280 }}>
            {trim(
              "Ozian Airlines Stock Takes Off with the Emergence of New Emerald City Tourism",
              75
            )}
          </Text>
          <Text>2h ago</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Ionicons name="arrow-redo" size={15} color="#00D084" />
            <Text style={{ color: "#00D084" }}>EIN News IT</Text>
          </View>
        </View>
        <Image
          source={require("../assets/pic.png")}
          style={{ height: 70, width: 70, borderRadius: 5 }}
        />
      </View>
    </View>
  );
};

export default RecentNews;
