import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

export default function Otpscreen({ navigation }) {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];

        if (value === '') { // Handle backspace
            newOtp[index] = '';
            setOtp(newOtp);
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        } else if (/^[0-9]$/.test(value)) { // Handle valid digit input
            newOtp[index] = value;
            setOtp(newOtp);
            if (index < 3) {
                inputRefs.current[index + 1].focus();
            } else {
                navigation.navigate('AppDrawer'); // Navigate after last digit
            }
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../Assets/Ellipse23.png')}
                    style={styles.ellipse23}
                />
                <Image
                    source={require('../Assets/Ellipse21.png')}
                    style={styles.ellipse21}
                />
                <Image source={require('../Assets/wrong.png')} style={styles.wrong} />
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.title}>OTP Verification</Text>
                <Text style={styles.description}>
                    We have sent a one-time password to this mobile number
                </Text>
                {/* <Text style={styles.mobileNumber}>+91 - {mobileNumber}</Text> */}

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={styles.otpInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            ref={(ref) => inputRefs.current[index] = ref}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => navigation.navigate('AppDrawer')}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
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
    imageContainer: {
        alignItems: 'center',
    },
    ellipse23: {},
    ellipse21: {
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    wrong: {
        width: '65%',
        height: '80%',
        marginTop: '40%',
        position: 'absolute',
    },
    contentContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 20,
        width: '80%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        textAlign: 'center',
        marginBottom: 5,
        color: 'orange',
        fontWeight: '400',
    },
    mobileNumber: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
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
