// src/components/TrainCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type TrainCardProps = {
  train: {
    name: string;
    arrival: string;
    departure: string;
  };
  onSelect: () => void;
};

const TrainCard = ({ train, onSelect }: TrainCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onSelect}>
      <Text style={styles.trainName}>{train.name}</Text>
      <Text style={styles.trainDetails}>Arrival: {train.arrival}</Text>
      <Text style={styles.trainDetails}>Departure: {train.departure}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onSelect}>
          <Text style={styles.buttonText}>Select</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // Card background color
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  trainName: {
    fontSize: 18,
    color: 'black', // Train name color
  },
  trainDetails: {
    fontSize: 16,
    color: 'black', // Arrival and departure time color
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF', // Button color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 16,
  },
});

export default TrainCard;
