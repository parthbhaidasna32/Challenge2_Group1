import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const ContactScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:info@lawfirm.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <Text style={styles.label}>📍 Address:</Text>
      <Text style={styles.text}>123 Wentworth Crescent, Thunder Bay, ON</Text>

      <Text style={styles.label}>📞 Phone:</Text>
      <TouchableOpacity onPress={handlePhonePress}>
        <Text style={[styles.text, styles.link]}>+1 (234) 567-890</Text>
      </TouchableOpacity>

      <Text style={styles.label}>✉️ Email:</Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={[styles.text, styles.link]}>info@lawfirm.com</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1c3c',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#d4af37',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginTop: 15,
  },
  text: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  link: {
    color: '#d4af37',
    textDecorationLine: 'underline',
  },
});

export default ContactScreen;
