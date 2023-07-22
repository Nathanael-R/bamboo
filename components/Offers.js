const Offers = () => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ marginBottom: 15 }}>Special Offers</Text>
      <View
        style={{
          backgroundColor: "#acb0f7",
          width: 330,
          borderRadius: 5,
          padding: 15,
        }}
      >
        <Text style={{ color: "white" }}>Introducing Fixed Returns</Text>
        <Text style={{ maxWidth: 200, color: "white" }}>
          An easy way to invest and get dollar returns. Do nothing and watch
          your money grow
        </Text>
      </View>
    </View>
  );
};

export default Offers