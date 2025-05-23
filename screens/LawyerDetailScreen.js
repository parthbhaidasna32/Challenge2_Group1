import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LawyerDetailScreen = ({ route }) => {
  const { lawyer } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: lawyer.image }} style={styles.image} />
      <Text style={styles.name}>{lawyer.name}</Text>
      <Text style={styles.specialty}>{lawyer.specialty}</Text>
      <Text style={styles.experience}>{lawyer.experience} of experience</Text>
      <Text style={styles.bio}>
        {lawyer.name} is an experienced {lawyer.specialty} attorney who has been helping clients for {lawyer.experience}. Trusted and respected in the legal field.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1c3c',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  specialty: {
    fontSize: 18,
    color: '#d4af37',
    marginTop: 5,
  },
  experience: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 10,
  },
  bio: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
  },
});

export default LawyerDetailScreen;
