// src/screens/TCSection.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const compartments = [
  { name: 'General 1', people: 60 },
  { name: 'General 2', people: 50 },
  { name: 'General 3', people: 30 },
];

export default function TCSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>General Compartment Count</Text>
      {compartments.map((compartment, index) => (
        <View key={index} style={styles.compartment}>
          <Text style={styles.compartmentName}>{compartment.name}</Text>
          <Text style={styles.compartmentPeople}>People: {compartment.people}</Text>
        </View>
      ))}
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
    color: 'black',
  },
  compartment: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f1f1f1',
  },
  compartmentName: {
    fontSize: 18,
    color: 'black', // Set compartment name color to black
  },
  compartmentPeople: {
    fontSize: 16,
    color: 'black', // Set people count color to black
  },
});
