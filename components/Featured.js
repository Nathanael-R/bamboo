import { FlatList, Pressable, Text, View } from "react-native";

const Featured = () => {
    const ListItem = ({ name, price }) => {
      return (
        <View>
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
      );
    };
    const renderItem = ({ item }) => {
      <ListItem name={item.name} price={item.price} />;
    };
    //   const Item = ({ name, price }) => (
    //     <View style={{backgroundColor: 'red'}}>
    //       <Text>{name} </Text>
    //       <Text>{price} </Text>
    //     </View>
    //   );
    //   const renderItem = ({ item }) => (
    //     <Item title={item.name} description={item.price} />
    //   );
  
    return (
      <View
        style={{ paddingTop: 30, paddingRight: 15, backgroundColor: "white" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Featured Themes</Text>
          <Pressable>
            <Text>See All</Text>
          </Pressable>
        </View>
        <View>
          <Text>Check out these categories to discover new stocks</Text>
          {/* <View>
            {DATA && <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />}
          </View> */}
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.price}
          />
        </View>
      </View>
    );
  };