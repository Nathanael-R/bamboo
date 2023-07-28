import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import {Ionicons} from '@expo/vector-icons'
const Profile = () => {
  const {width} = useWindowDimensions()
  const winWidth = width - 35
  const { profile } = styles;
  return (
    <View style={[profile, {width: winWidth}] }>
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
        Hello Nathanael,
      </Text>
      <View style={{ flexDirection: "row", gap: 15}}>
        <Ionicons name="ios-search" size={24} color="white" />
        <Ionicons name="notifications" size={24} color="white" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
})
export default Profile;
