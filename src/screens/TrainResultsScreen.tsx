import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const TrainResultsScreen = ({ route }: { route: any }) => {
  const { source, destination, date } = route.params;
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Mock API URL, replace with actual API
    axios.get(`https://api.example.com/trains?source=${source}&destination=${destination}&date=${date}`)
      .then(response => {
        setTrains(response.data); // Assuming data is an array of train objects
      })
      .catch(error => console.error(error));
  }, [source, destination, date]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Trains</Text>
      <FlatList
        data={trains}
        renderItem={({ item }) => (
          <View style={styles.trainCard}>
            <Text style={styles.trainName}>{item.name}</Text>
            <Text>Arrival: {item.arrival}</Text>
            <Text>Departure: {item.departure}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, marginBottom: 16 },
  trainCard: { padding: 16, marginVertical: 8, backgroundColor: '#f9f9f9' },
  trainName: { fontSize: 18 },
});

export default TrainResultsScreen;
