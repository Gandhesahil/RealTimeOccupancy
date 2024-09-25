// src/screens/TrainSelectionScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import TrainCard from '../components/TrainCard';

type TrainSelectionScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TrainSelection'>;
  route: {
    params: {
      source: string;
      destination: string;
      date: string;
    };
  };
};

const TrainSelectionScreen = ({ route, navigation }: TrainSelectionScreenProps) => {
  const { source, destination, date } = route.params;

  const trains = [
    { name: 'Train 1', arrival: '10:00 AM', departure: '2:00 PM' },
    { name: 'Train 2', arrival: '12:00 PM', departure: '4:00 PM' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Trains</Text>
      <FlatList
        data={trains}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TrainCard
            train={item}
            onSelect={() => navigation.navigate('RoleSelection')}
          />
        )}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: 'black',
  },
  flatList: {
    backgroundColor: 'black',
    padding: 10,
  },
});

export default TrainSelectionScreen;
