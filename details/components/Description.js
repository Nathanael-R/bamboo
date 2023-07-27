import { View, Text } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";

const Description = () => {
  function trim(str, num) {
    if (str.length < num) {
      return str;
    } else {
      return str.slice(0, num) + "...";
    }
  }
  const [drawer, setDrawer] = useState(false);
  let str = `Welcome to Aveanna Healthcare Holdings, a leading and innovative healthcare company dedicated to enhancing lives through compassionate care and cutting-edge solutions. With a relentless commitment to excellence, Aveanna Healthcare Holdings is at the forefront of revolutionizing the healthcare landscape.
    Our team of highly skilled and compassionate professionals is driven by a shared mission: to empower patients and their families by providing comprehensive and personalized healthcare services. From pediatric to adult care, we cater to a wide range of healthcare needs, ensuring that every individual receives the highest level of attention and support.
    At Aveanna Healthcare Holdings, we understand that each person's journey is unique, which is why we offer a wide spectrum of services tailored to meet specific requirements. From skilled nursing and therapy services to medical equipment and technology solutions, our comprehensive offerings cover all aspects of healthcare.
    Innovation is at the core of what we do. By leveraging the latest advancements in medical technology, we continuously seek to improve patient outcomes and experiences. Our state-of-the-art facilities and telehealth services enable us to reach individuals in various communities, delivering exceptional care regardless of geographical boundaries.`;

  return (
    <View style={{ paddingVertical: 10 }}>
      <Text style={{ fontWeight: "bold" }}>
        About Aveanna Healthcare Holdings Inc.
      </Text>
      <Text>{!drawer ? trim(str, 200) : str}</Text>
      <View style={{ gap: 20, paddingVertical: 15 }}>
        <View>
          <Text>CEO</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>SECTOR</Text>
          <Text>Manufacturing</Text>
        </View>
      </View>
      <Pressable onPress={() => setDrawer(!drawer)}>
        <Text style={{ color: "#00D084", textAlign: "center" }}>{!drawer? "Show More" : "Show Less"}</Text>
      </Pressable>
      <View style={{paddingVertical: 20, gap: 5}}>
        <Text>Data source: IEX Trading Group, DriveWealth</Text>
        <Text>Price updated wednesday at 9 PM WAT</Text>
        <Text>
          Data displayed above is indicative only and its accuracy or
          completeness is not guaranteed. Actual execution price may vary
        </Text>
      </View>
    </View>
  );
};

export default Description;
