import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

const AboutScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background_blur.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>About Our Law Firm</Text>
          <Text style={styles.description}>
            Trusted legal representation since 1992. Our team brings decades of experience,
            professionalism, and compassion to every case.
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>1992</Text>
              <Text style={styles.statLabel}>Founded</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>30+</Text>
              <Text style={styles.statLabel}>Years</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>1000+</Text>
              <Text style={styles.statLabel}>Cases Won</Text>
            </View>
          </View>

          <Text style={styles.missionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            To uphold justice and deliver client-focused legal solutions that make a real difference.
            We pride ourselves on professionalism, ethics, and empathy.
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', // <<< this darkens everything
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#d4af37',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  statCard: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#aaa',
    fontSize: 14,
  },
  missionTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 10,
  },
  missionText: {
    color: '#ccc',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutScreen;
