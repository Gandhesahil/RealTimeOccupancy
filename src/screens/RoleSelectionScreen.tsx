// src/screens/RoleSelectionScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type RoleSelectionScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'RoleSelection'>;
};

export default function RoleSelectionScreen({ navigation }: RoleSelectionScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <Button
        title="I am a Traveler"
        onPress={() => navigation.navigate('TravelerSection')}
      />
      <Button
        title="I am a T.C."
        onPress={() => navigation.navigate('TCSection')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
});
