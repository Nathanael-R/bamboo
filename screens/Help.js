import "react-native-gesture-handler";
import {
  Button,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Help() {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["25%", "50%", "100%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View
          style={[
            styles.container,
            { backgroundColor: isOpen ? "gray" : "white" },
          ]}
        >
          <Button title="Present Modal" onPress={handlePresentModal} />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 25 }}
            onDismiss={() => setIsOpen(false)}
          >
            <View style={styles.contentContainer}>
              <View
                style={{
                  width: width,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: "gray",
                  marginVertical: 30,
                  zIndex:2
                }}
              />
              <Text style={[styles.title, { width: "100%" }]}>Theme</Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
});