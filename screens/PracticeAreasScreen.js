import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const practiceAreas = [
  { id: '1', icon: '🛡️', title: 'Criminal Law' },
  { id: '2', icon: '👨‍👩‍👧', title: 'Family Law' },
  { id: '3', icon: '💼', title: 'Corporate Law' },
  { id: '4', icon: '🌍', title: 'Immigration Law' },
  { id: '5', icon: '🏠', title: 'Real Estate Law' },
  { id: '6', icon: '📄', title: 'Legal Drafting' },
];

const PracticeAreasScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Areas</Text>
      <FlatList
        data={practiceAreas}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('PracticeAreaDetail', { area: item })}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
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
    textAlign: 'center',
  },
  grid: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#13274f',
    flex: 1,
    margin: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  icon: {
    fontSize: 36,
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default PracticeAreasScreen;
