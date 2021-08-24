import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/Home'
import StarMapScreen from './screens/StarMap';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
   return(
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" screenOptions={{
         headerShown=false
       }}>
         <Stack.Screen name ="Home" component = {HomeScreen} />
         <Stack.Screen name ="SpaceCrafts" component = {SpaceCraftsScreen} />
         <Stack.Screen name ="DailyPic" component = {DailyPicScreen} />
         <Stack.Screen name ="StarMap" component = {StarMapScreen} />

       </Stack.Navigator>
     </NavigationContainer>
   )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
