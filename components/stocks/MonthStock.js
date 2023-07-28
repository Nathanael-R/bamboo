import { Text, View } from "react-native";
import HomeChart from "../charts/HomeChart";
const MonthStock = () => {
  
  return (
    <View style={{paddingVertical: 10}}>
      <Text style={{fontWeight: 'bold'}}>Stock of the Month</Text>
      <Text>Check out our freshest pick for the month</Text>
      <HomeChart />
    </View>
  );
};

export default MonthStock;
