import {View, Text} from 'react-native';
import React, {useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import tw from 'twrnc';

// {
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: '#fff',
// }
const Phoneinput = () => {
  const [num, setnum] = useState('');
  const [phNum, setPhnum] = useState('');
  return (

    

    <View style={tw`flex-1 items-center justify-center bg-[#fff]`}>
      <Text>phoneinput</Text>
      <PhoneInput
        defaultValue={num}
        defaultCode="IN"
        containerStyle={tw`text-black bg-[#F0F0F0] w-[327px]    `}
        textInputStyle={tw`text-black bg-[#F0F0F0]`}
        textContainerStyle={{backgroundColor: '#F0F0F0'}}
        onChangeText={text => {
          setnum(text);
        }}
        withDarkTheme
        layout="second"
      />
    </View>
  );
};

export default Phoneinput;
