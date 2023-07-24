import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, KeyboardAvoidingView, Image, TouchableOpacity, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CustomSwitch from '../components/CustomSwitch';

export default function Login(props) {
    const [email, setemail] = useState('');
    const [SelectedSwitch, setSelectedSwitch] = useState(2);
    const [phonenumber, setphonenumber] = useState('');
    const onchangephone = (number) => {
        setphonenumber(number)
    }
    const onchangeemail = (email) => {
        setemail(email)
    }

    const onprss = () =>{
        props.navigation.navigate('OTPVerification')
    }
    return (

        <KeyboardAvoidingView style={styles.container}>
             <StatusBar
        backgroundColor="transparent" 
        barStyle="light-content" 
        hidden={false} 
        translucent={true}
      />
            <Image source={require('../../assets/images/backimage.jpg')} style={{ height: '30%', width: '100%' }} />
            <View style={{ padding: '5%', position: 'absolute', flex: 1, justifyContent: 'flex-end' }}>
                <Text style={styles.text}>Log in to you Account</Text>
                <Text numberOfLines={2} style={styles.secondtext}>Login for daily goal planning and task management</Text>
            </View>
            <View style={{ padding: '5%' }}>
                <View style={{ alignItems: 'center' }}>
                    <CustomSwitch
                        selectionMode={2}
                        roundCorner={true}
                        option1={'Email'}
                        option2={'Phone Number'}
                        onSelectSwitch={setSelectedSwitch}
                        selectionColor={'#FFFFFF'}
                    />
                </View>
                <View style={{ paddingTop: '5%' }}>

                    {
                        SelectedSwitch == 2 ?
                            <>
                                <Text style={styles.textTitle}>Phone Number</Text>
                                <View style={styles.openDilogView}>
                                    <Text style={{ color: 'black', justifyContent: 'flex-start' }}>{"+91"}</Text>
                                    <TextInput
                                        style={styles.TextInputStyle}
                                        placeholder="Enter Phone Number"
                                        placeholderTextColor="#8B8F93"
                                        keyboardType="numeric"
                                        value={phonenumber}
                                        onChangeText={onchangephone}
                                        secureTextEntry={false}
                                    />
                                </View>
                            </>
                            :
                            <>
                                <Text style={styles.textTitle}>Email Id</Text>
                                <View style={styles.openDilogView}>
                                    <TextInput
                                        style={styles.TextInputStyle}
                                        placeholder="Enter your Email Id"
                                        placeholderTextColor="#8B8F93"
                                        keyboardType="email-address"
                                        value={email}
                                        onChangeText={onchangeemail}
                                        secureTextEntry={false}
                                    />
                                </View>
                            </>
                    }
                </View>
            </View>
            <View style={styles.viewBottom}>
            <TouchableOpacity onPress={onprss} >
                    <View style={[
                        styles.btnContinue,
                        {
                            backgroundColor: phonenumber ? '#244DB7' : 'gray'
                        }
                    ]}>
                        <Text style={styles.textContinue}>Get OTP</Text>
                    </View>
            </TouchableOpacity>


                <View style={{
                    padding: '2%', justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: 'black',
                    }}>Don't Have an Account?</Text>
                    <Text style={{
                        color: '#1A63BD'
                    }}>Sign Up</Text>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
       // textAlign: 'left',
      //  marginBottom:100,
        marginTop:100
        //textAlign: 'center',
        //alignSelf: 'center',

    },
    secondtext:
    {
        margin:4,
        color: '#ffffff',
        fontWeight: '400',
       // textAlign:'left'
    },
    textTitle: {
        marginBottom: 10,
        marginTop: 1,
        fontSize: 15,
        alignContent: 'flex-start',
        color: 'black'
    },

    openDilogView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '1%',
        paddingLeft: '5%',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,

    },
    TextInputStyle: {
        height: 50,
        color: 'black',
    },
    viewBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
        alignItems: 'center'
    },
    btnContinue: {
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContinue: {
        color: '#ffffff',
        alignitem: 'center'
    },
    customswitch: {
        width: 50,
        height: 50,
        borderRadius: 50
    },

})
