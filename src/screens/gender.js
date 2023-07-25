import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function name(){
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
    const handleNameChange = (text) => {
      setName(text);
    };
  
    const handleGenderSelection = (selectedGender) => {
      setGender(selectedGender);
      setIsDropdownVisible(false);
    };
  
    const handleSaveData = () => {
      console.log('Name:', name);
      console.log('Gender:', gender);
        };
  
    return (
      <View style={styles.container}>
        <Text style={{color:'#050507',fontWeight:700}}>Personal Details</Text>
        <Text style={{color:'#272727',fontWeight:500}}>Enter your personal details to setup your account</Text>
        <Text style={styles.textTitle}>Your Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
          placeholder="Enter your name"
          placeholderTextColor="#8B8F93"
        />
        <Text style={styles.textTitle}>Select Gender</Text>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          <Text style={{color:'#8B8F93'}}>{gender === '' ? 'Select your Gender' : gender}</Text>
        </TouchableOpacity>
        {isDropdownVisible && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={() => handleGenderSelection('Male')}>
              <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelection('Female')}>
              <Text>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelection('Other')}>
              <Text>Other</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveData}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      padding: 20,
    },
    textTitle: {
        marginBottom: 10,
        marginTop: 1,
        fontSize: 15,
        alignContent: 'flex-start',
        color: 'black'
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
      color:'black'
    },
    dropdownButton: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    dropdownContainer: {
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
     // justifyContent: 'center',
      alignItems: 'center',
      text:'black'
    },
    saveButton: {
      width: '100%',
      height: 40,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#AFAFAF'
    },
  });
  

  