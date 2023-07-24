import { StyleSheet, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'
const Profile = () => {
  const { profile } = styles;
  return (
    <View style={profile}>
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
        Hello Nathanael,
      </Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
        <Ionicons name="ios-search" size={24} color="white" />
        <Ionicons name="notifications" size={24} color="white" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
    marginBottom: 20,
  },
})
export default Profile;
