import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PracticeAreaDetailScreen = ({ route }) => {
  const { area } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{area.icon}</Text>
      <Text style={styles.title}>{area.title}</Text>
      <Text style={styles.description}>
        {area.title} services include comprehensive legal support, expert advice, and client-focused representation tailored to individual cases.
      </Text>

      <Text style={styles.servicesTitle}>Key Services:</Text>
      <Text style={styles.service}>• Consultation & Legal Advice</Text>
      <Text style={styles.service}>• Case Analysis & Representation</Text>
      <Text style={styles.service}>• Documentation & Filing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1c3c',
    padding: 20,
  },
  icon: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#d4af37',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
  },
  servicesTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    fontWeight: '600',
  },
  service: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 6,
  },
});

export default PracticeAreaDetailScreen;
