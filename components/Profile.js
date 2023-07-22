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

export default Profile;
