import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

export default function WelcomeScreen({
  navigation,
}: {
  navigation: WelcomeScreenNavigationProp;
}) {
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <ImageBackground
      source={require('../../assets/wellcomeBackground.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        {/* Header Text */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>UpTodo</Text>
          <Text style={styles.subtitle}>Manage your tasks</Text>
        </View>

        {/* Illustration */}
        <Image
          source={require('../../assets/wellcomeScreenIcon.png')}
          style={styles.image}
        />

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={goToHome}>
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>This is Created by Lakshitha Madushan</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 50,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 72,
    fontWeight: 'bold',
    color: '#4835F8', // violet
    opacity: 0.74,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    opacity: 0.87,
    marginTop: 5,
  },
  image: {
    width: 319,
    height: 294,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#8875FF',
    paddingVertical: 16,
    paddingHorizontal: 55,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
    fontWeight: 600,
  },
});
