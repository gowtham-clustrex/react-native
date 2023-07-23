import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomSwitch from './CustomSwitch';

export default function Dashboard({navigation}) {
  const onSelectSwitch = index => {
    alert('Selected index: ' + index);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 25, margin: 20, textAlign:'center'}}>
        React native switch selection button
      </Text>
      <View style={{alignItems: 'center', margin: 20}}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'First'}
          option2={'Second'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'blue'}
        />
      </View>
      <View style={{alignItems: 'center', margin: 20}}>
        <CustomSwitch
          selectionMode={2}
          roundCorner={false}
          option1={'Option1'}
          option2={'Option2'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'red'}
        />
      </View>
    </View>
  );
}

// import React, { useState } from 'react';
// import { View, Switch, StyleSheet, Text } from 'react-native';

// const MyComponent = () => {
//   const [isEnabled, setIsEnabled] = useState(false);

//   const toggleSwitch = () => {
//     setIsEnabled((previousState) => !previousState);
//   };

//   return (
//     <View style={styles.container}>
//       <Switch
//         trackColor={{ false: '#767577', true: '#81b0ff' }}
//         thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//       <Text>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default MyComponent;
