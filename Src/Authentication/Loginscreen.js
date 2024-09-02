import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Otp');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={require('../Assets/Ellipse23.png')}
          style={styles.ellipse23}
        />
        <Image
          source={require('../Assets/Ellipse21.png')}
          style={styles.ellipse21}
        />
        <Image source={require('../Assets/Group.png')} style={styles.group} />
      </View>
      <View style={styles.position}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.description}>
          Please enter your mobile number to login
        </Text>

        <TextInput
          style={styles.mobileInput}
          keyboardType="phone-pad"
          placeholder="Enter Mobile Number"
          maxLength={10}
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitButtonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  position: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 30,
    width: '80%'
  },
  imageContainer: {
    alignItems: 'center',
  },
  ellipse23: {
  },
  ellipse21: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  group: {
    width: '70%',
    height: '60%',
    marginTop: '60%',
    position: 'absolute',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'orange',
    fontWeight: '400'
  },
  mobileNumber: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  mobileInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 18,
    color: '#000000',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
  },
  timer: {
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 10,
  },
  resendText: {
    textAlign: 'center',
    color: '#7D7D7D',
    marginBottom: 30,
  },
  resendLink: {
    color: '#FF6F00',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#FF6F00',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});