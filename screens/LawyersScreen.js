import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const lawyers = [
  {
    name: 'Richard Davis',
    specialty: 'Criminal Law',
    experience: '20 years',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jane Smith',
    specialty: 'Family Law',
    experience: '15 years',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Robert Brown',
    specialty: 'Business Law',
    experience: '10 years',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Emily Johnson',
    specialty: 'Immigration Law',
    experience: '12 years',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Michael Lee',
    specialty: 'Corporate Law',
    experience: '8 years',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
  {
    name: 'Sarah Walker',
    specialty: 'Real Estate Law',
    experience: '11 years',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const LawyersScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Our Lawyers</Text>
      {lawyers.map((lawyer, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('LawyerDetail', { lawyer })}
        >
          <Image source={{ uri: lawyer.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{lawyer.name}</Text>
            <Text style={styles.specialty}>{lawyer.specialty}</Text>
            <Text style={styles.experience}>{lawyer.experience} of experience</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1c3c',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#d4af37',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#13274f',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialty: {
    color: '#ccc',
    fontSize: 16,
  },
  experience: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 5,
  },
});

export default LawyersScreen;
