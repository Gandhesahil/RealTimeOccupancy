// src/screens/TravelerSection.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const compartments = [
  { name: 'General 1', vacancy: 40, occupancy: 60 },
  { name: 'General 2', vacancy: 30, occupancy: 70 },
  { name: 'General 3', vacancy: 50, occupancy: 50 },
];

export default function TravelerSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Compartment Vacancy Status</Text>
      <FlatList
        data={compartments}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={[styles.compartment, { backgroundColor: item.occupancy > 70 ? 'red' : 'green' }]}>
            <Text>{item.name}</Text>
            <Text>Vacancy: {item.vacancy}%</Text>
            <Text>Occupancy: {item.occupancy}%</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    marginBottom: 16,
    color:'black'
  },
  compartment: {
    padding: 16,
    marginVertical: 8,
  },
});
