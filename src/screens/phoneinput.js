import React from 'react';
import { View, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';

const PhoneInputScreen = () => {
  return (
    <View style={styles.container}>
      <PhoneInput
        ref={(ref) => {
          this.phone = ref;
        }}
        initialCountry="us" // Set the initial country (optional)
        value="" // Set the initial value of the phone number (optional)
        onSelectCountry={(iso2) => console.log('Selected country:', iso2)}
        onChangePhoneNumber={(number) => console.log('Phone number:', number)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default PhoneInputScreen;
