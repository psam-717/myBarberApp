import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Pressable,  } from 'react-native'

import React from 'react'
import Spacer from '../../components/Spacer';

const {width, height} = Dimensions.get('screen');

const SignIn = () => {
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={require('../../assets/images/background-1.jpeg')}
                    style={styles.backgroundImage}
                >
                    <KeyboardAvoidingView style={{flex: 1}}
                        behavior='padding'
                    >
                        <ScrollView
                            contentContainerStyle={styles.scrollContent}
                            scrollEnabled={true}
                        >
                            <View style={styles.contentContainer}>
                            <View style={{alignItems: 'center', marginTop: height * 0.33}}>
                                    <Text style={{color: 'white', fontSize: 35}}>Welcome here</Text>
                                    <Text style={{color: 'gray', fontSize: 20}}>Log in to your account</Text>
                            </View>

                                <View style={{alignItems: 'center', marginTop: 20}}>
                                    <TextInput
                                        style={{borderColor: 'gray', borderWidth: 1, padding: 10, backgroundColor: '#1c1d20ff', width: width * 0.85, height: 55, borderRadius: 15}}
                                    />
                                    <Spacer/>
                                    <TextInput
                                        style={{borderColor: 'gray', borderWidth: 1, padding: 10, backgroundColor: '#1c1d20ff', width: width * 0.85, height: 55, borderRadius: 15}}
                                    />
                                </View>
                            </View>
                            <Spacer/>
                            <Pressable 
                            onPress={() => {console.log('sign in')}}
                            style={{alignItems: 'center', justifyContent: 'center' ,backgroundColor: 'rgba(238, 238, 238, 0.57)', width: width * 0.65, height: 50, borderRadius: 20}}>
                                <Text style={{fontSize: 30, color: 'black'}}>Hello</Text>
                            </Pressable>
                            <Spacer height={40}/>
                        </ScrollView>

                        
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
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})