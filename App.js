import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import LawyersScreen from './screens/LawyersScreen';
import LawyerDetailScreen from './screens/LawyerDetailScreen';
import PracticeAreasScreen from './screens/PracticeAreasScreen';
import PracticeAreaDetailScreen from './screens/PracticeAreaDetailScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Lawyers" component={LawyersScreen} />
        <Stack.Screen name="LawyerDetail" component={LawyerDetailScreen} />
        <Stack.Screen name="PracticeAreas" component={PracticeAreasScreen} />
        <Stack.Screen name="PracticeAreaDetail" component={PracticeAreaDetailScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
