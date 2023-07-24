import { StyleSheet, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'
const Profile = () => {
  const { profile } = styles;
  return (
    <View style={profile}>
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
        Hello Nathanael,
      </Text>
      <View style={{ flexDirection: "row", gap: 15, position: 'absolute', right: 0 }}>
        <Ionicons name="ios-search" size={24} color="white" />
        <Ionicons name="notifications" size={24} color="white" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    postion: 'relative'
  },
})
export default Profile;
