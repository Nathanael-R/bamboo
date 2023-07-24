import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Portfolio />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
