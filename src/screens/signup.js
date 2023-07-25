import React,{useState}from "react";
import {View,Text,TextInput,StyleSheet,Picker, KeyboardAvoidingView,StatusBar,TouchableOpacity,ProgressBarAndroidBase} from 'react-native';
export default function signup(){
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const handleNameChange = (text) => {
    setName(text);
  };
  const handleGenderChange = (itemValue) => {
    setGender(itemValue);
  };
    return(
        <KeyboardAvoidingView>
        <StatusBar
        backgroundColor="#fff" 
        barStyle="dark-content" 
        hidden={false} 
        translucent={false}
      />
    <View style={styles.textContainer}>
        <Text style={{color:'#050507',fontWeight:700}}>Personal Details</Text>
          {/* <ProgressBarAndroidBase styleAttr="Horizontal" /> */}
        <Text style={{color:'#272727',fontWeight:500}}>Enter your personal details to setup your account</Text>
        <View style={styles.container}>
        <Text>Your Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
          placeholder="Enter your name"
          placeholderTextColor="black"
        />
        <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={handleGenderChange}
         >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      <TouchableOpacity> 
        <Text>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
    );
};
const styles=StyleSheet.create({
    textContainer: {
        padding: 40,
      },
      backButton: {
        marginLeft: 10,
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
      picker: {
        width: '100%',
        height: 40,
      }
        }
)