import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TopDetail from '../components/TopDetail'
import TitleChart from '../components/TitleChart'
import Button from '../components/Button'
import Compare from '../components/Compare'
import Description from '../components/Description'


const LowerScreen = () => {
    return (
      <View style={{paddingHorizontal: 15}}>
        <Compare />
        <Description />
      </View>
    );
};


const About = () => {
  return (
    <ScrollView style={{ backgroundColor: "white", position: 'relative' }}>
      <TopDetail />
      <TitleChart />
      <LowerScreen />
      <Button />
    </ScrollView>
  )
}

export default About