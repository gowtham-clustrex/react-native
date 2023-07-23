import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, KeyboardAvoidingView, Image, TouchableOpacity, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CustomSwitch from '../components/CustomSwitch';
// import CustomSwitch from '../components/CustomSwitch';

export default function Login() {
    const [email,setemail]=useState('');
    const[SelectedSwitch,setSelectedSwitch]=useState(1);
    const [phonenumber, setphonenumber] = useState('');
    const onchangephone = (number) => {
        setphonenumber(number)
    }
    const onchangeemail=(email)=>{
        setemail(email)
    }
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/backimage.jpg')} style={{ height: '30%', width: '100%' }} />
            <View style={{ padding: '5%',position:'absolute',marginTop:100}}>
                <Text style={styles.text}>Log in to you Account</Text>
                <Text numberOfLines={2} style={styles.secondtext}>Login for daily goal planning and task management</Text>
            </View>

           
            {/* <ScrollView > */}

            <View style={{ padding: '5%'}}>

            <CustomSwitch 
                selectionMode={2}
                roundCorner={true}
                 option1={'Email'}
                 option2={'Phone Number'}
                 onSelectSwitch={setSelectedSwitch}
                selectionColor={'#FFFFFF'}
               /> 
               {
                SelectedSwitch == 2?
                <>
                <Text style={styles.textTitle}>Phone Number</Text>
                <View style={styles.openDilogView}>
                    <Text style={{ color: 'black'}}>{"+91"}</Text>
                         <TextInput
                        style={styles.phoneInputStyle}
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
                                style={styles.phoneInputStyle}
                                placeholder="Enter your Email Id"
                                placeholderTextColor="#8B8F93"
                                keyboardType="email-address"
                                value={phonenumber}
                                onChangeText={onchangephone}
                                secureTextEntry={false}
                            />
                 </View>
                 </>
                }

            <View style={styles.viewBottom}>
                <TouchableOpacity>
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
                    alignItems: 'center', bottom: '2%'
                }}>
                    <Text style={{
                        color: 'black',
                    }}>Don't Have an Account?</Text>
                    <Text style={{
                        color: 'blue'
                    }}>Sign Up</Text>
                </View>

            </View>
            {/* </ScrollView> */}

        </View>
        </View>
    );
};





const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor:'#FFFFFF',
        // height:'100%'
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding:'2%'
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'left',
        // fontWeight: '',
        // padding: 0,
        // bottom: 200,
        // fontStyle: 'Merriweather'
    },
    secondtext:
    {
        color: '#ffffff',
        // bottom: 200,
        // fontStyle: 'Merriweather',
        fontWeight: '400',
    },
    textTitle: {
        marginBottom: 10,
        marginTop: 20,
        fontSize: 15,
        alignContent: 'flex-start',
        color: 'black'
    },

    openDilogView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1%',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,

    },
    phoneInputStyle: {
        marginLeft: 10,
        // flex: 1,
        height: 50,
        color: 'black',
        // padding:'2%'
        // backgroundColor: '#F0F0F0'
    },
    viewBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        // marginBottom: 0,
        bottom:0,
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
        borderRadius: 50,
        // This CSS class will make the switch a square
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },

})
