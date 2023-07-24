import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
  Animated,
  ScrollView,
} from "react-native";
import { Themes } from "./utils/helper";
import { useState, useRef } from "react";
import Paginator from "./Paginator";


const WatchList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);

  const OnComponent = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
      <View
        style={{
          flex: 1,
          width: width,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={item.image}
          style={{
            justifyContent: "center",
            height: 100,
            width: 100,
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };
  return (
    <View style={{ paddingTop: 30, paddingRight: 15}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>WatchList</Text>
        <Pressable>
          <Text>See All</Text>
        </Pressable>
      </View>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <FlatList
          data={Themes}
          renderItem={({ item }) => <OnComponent item={item} />}
          numColumns={1}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
          scrollEnabled={true}
        />
      <Paginator data={Themes} scrollX={scrollX}/>
      </View>
    </View>
  );};

export default WatchList;
