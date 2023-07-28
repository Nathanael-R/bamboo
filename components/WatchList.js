import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
  Animated,
  ScrollView,
  StyleSheet,
} from "react-native";
import { PageArray, Themes } from "./utils/helper";
import { useState, useRef } from "react";
import Paginator from "./Paginator";
import WatchCard from "./cards/WatchCard";
import Header from "./topscreen/Header";

const WatchList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);
  const innerWidth = useWindowDimensions();
  const width = innerWidth.width - 20
  return (
    <View style={{ paddingTop: 30, paddingRight: 15 }}>
      <Header title='WatchList'/>
      <View style={{gap: 20}}>
        <ScrollView
          contentContainerStyle={styles.container}
          pagingEnabled
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
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
        >
          <FlatList
            data={Themes}
            renderItem={({ item }) => <WatchCard item={item} Details={'Details'}/>}
            keyExtractor={(item) => item.id}
            bounces={false}
          />
          <FlatList
            data={Themes}
            renderItem={({ item }) => <WatchCard item={item} Details={'Details'}/>}
            keyExtractor={(item) => item.id}
            bounces={false}
          />
          <FlatList
            data={Themes}
            renderItem={({ item }) => <WatchCard item={item} Details={'Details'}/>}
            keyExtractor={(item) => item.id}
            bounces={false}
          />
          <FlatList
            data={Themes}
            renderItem={({ item }) => <WatchCard item={item} Details={'Details'}/>}
            keyExtractor={(item) => item.id}
            bounces={false}
          />
        </ScrollView>
        <View  style={{alignItems: 'center'}}>
          <Paginator data={PageArray} scrollX={scrollX} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default WatchList;
