import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Pressable,  } from 'react-native'

import React from 'react'
import Spacer from '../../components/Spacer';
import { router } from 'expo-router';

const {width, height} = Dimensions.get('screen');

const SignIn = () => {
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={require('../../assets/images/background-1.jpeg')}
                    style={styles.backgroundImage}
                >
                    <KeyboardAvoidingView 
                        style={{flex: 1}}
                        behavior='padding' 
                        keyboardVerticalOffset={-150}
                    >

                            <View style={styles.contentContainer}>
                                <View style={{alignItems: 'center', }}>
                                    <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>Welcome Here</Text>
                                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'thin'}}>sign in to your account</Text>
                                </View>

                                <View style={{alignItems: 'center', marginTop: 20}}>
                                    <TextInput style={styles.textInputStyle}/>
                                    <Spacer/>
                                    <TextInput style={styles.textInputStyle} />
                                </View>

                                <Spacer/>

                                <Pressable 
                                onPress={() => router.push('auth/signUp')}
                                style={styles.buttonStyle}>
                                    <Text style={{fontSize: 30, color: 'black'}}>Sign in</Text>
                                </Pressable>
                            </View>
    
                    </KeyboardAvoidingView>

                </ImageBackground>
        </TouchableWithoutFeedback>
    </View>

  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: 'cover'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle : {
        borderColor: 'gray', 
        borderWidth: 1, 
        padding: 10, 
        backgroundColor: '#1c1d20ff', 
        width: width * 0.85, 
        height: 55, 
        borderRadius: 15,
        color: 'white',
        fontSize: 15
    },
    buttonStyle: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rgba(238, 238, 238, 0.57)', 
        width: width * 0.65, 
        height: 50, 
        borderRadius: 20

    }
})