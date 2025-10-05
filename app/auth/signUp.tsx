import { 
  StyleSheet, 
  Text, 
  View, 
  Dimensions, 
  ImageBackground, 
  TextInput, 
  TouchableNativeFeedback, 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  Pressable,
  TouchableWithoutFeedback
} from 'react-native'
import React from 'react';
import Spacer from '../../components/Spacer';

const {width, height} = Dimensions.get('screen');

const SignUp = () => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
              source={require('../../assets/images/background-1.jpeg')}
              style= {styles.backgroundImage}
            >
              <KeyboardAvoidingView
                style={styles.keyBoardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : -100 }
              >
                <ScrollView
                  contentContainerStyle={styles.contentContainer}
                  showsVerticalScrollIndicator={false}

                > 

                  {/* Topic and sub-topic */}
                  <View style={{width: width * 0.84}}>
                    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', marginTop: 20, alignSelf: 'center'}}>Welcome to BarbQuest</Text>
                    <Text style={{alignSelf: 'center', marginTop: 8, fontSize: 16}}>Sign up to create an account</Text>
                  </View>

                  <Spacer height={50}/>

                  {/* Text inputs */}
                  <View style={{alignItems: 'center'}}>
                    <TextInput style={styles.textInputStyle} placeholder='John Doe' placeholderTextColor={'gray'}/>
                    <Spacer/>
                    <TextInput style={styles.textInputStyle} placeholder='example@gmail.com' placeholderTextColor={'gray'} keyboardType='email-address' autoCapitalize='none'/>
                    <Spacer/>
                    <TextInput style={styles.textInputStyle} placeholder='password' placeholderTextColor={'gray'}/>
                    <Spacer/>
                    <TextInput style={styles.textInputStyle} placeholder='confirm password' placeholderTextColor={'gray'}/>
                  </View>

                    <Spacer/>

                    <Pressable
                      style={styles.buttonStyle}
                    >
                    <Text style={{fontSize: 30, color: 'black'}}>Sign up</Text>
                    </Pressable>
                  <Spacer/>

                </ScrollView>

              </KeyboardAvoidingView>

            </ImageBackground>
      </TouchableNativeFeedback>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    contentContainer: {
      marginTop: 90,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: width * 0.90,
      // height: height * 0.65,
      borderRadius: 20,
      backgroundColor: 'rgba(226, 223, 223, 0.57)'
    },
    keyBoardAvoidingView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    backgroundImage: {
      width: width,
      height: height,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInputStyle : {
        borderColor: 'gray', 
        borderWidth: 1, 
        padding: 10, 
        backgroundColor: '#1c1d20ff', 
        width: width * 0.75, 
        height: 55, 
        borderRadius: 15,
        color: 'white',
        fontSize: 15,
        
    },
    buttonStyle: {
      alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rgba(245, 240, 240, 0.57)', 
        width: width * 0.65, 
        height: 50, 
        borderRadius: 20
    }
})