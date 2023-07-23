import React, { useState } from 'react';
import { View, Text, Picker, TextInput, StyleSheet } from 'react-native';
const ContactForm = () => {
    const [selectedOption, setSelectedOption] = useState('email');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const handleOptionChange = (value) => {
      setSelectedOption(value);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Select Contact Method:</Text>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => handleOptionChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Email" value="email" />
          <Picker.Item label="Phone Number" value="phone" />
        </Picker>
  
        {selectedOption === 'email' && (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              placeholder="Enter your email"
            />
          </View>
        )}
  
        {selectedOption === 'phone' && (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="phone-pad"
              placeholder="Enter your phone number"
            />
          </View>
        )}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    picker: {
      width: '100%',
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
    },
  });
  




                   // <Text style={{ color: 'black'}}>{"+91"}</Text>
                          <TextInput
                                style={styles.phoneInputStyle}
                                placeholder="Enter your Email Id"
                                placeholderTextColor="#8B8F93"
                                keyboardType="email-address"
                                value={phonenumber}
                                onChangeText={onchangephone}
                                secureTextEntry={false}
                            />
                    