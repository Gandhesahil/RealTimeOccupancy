// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TrainSelectionScreen from './screens/TrainSelectionScreen';
import RoleSelectionScreen from './screens/RoleSelectionScreen';
import TCSection from './screens/TCSection';
import TravelerSection from './screens/TravelerSection';
import { RootStackParamList } from './types/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TrainSelection" component={TrainSelectionScreen} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="TravelerSection" component={TravelerSection} />
        <Stack.Screen name="TCSection" component={TCSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
