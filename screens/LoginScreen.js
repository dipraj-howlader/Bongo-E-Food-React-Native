import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import firebase from '../firebase';
import { useNavigation } from '@react-navigation/core';
// import { GoogleAuthProvider } from "firebase/auth";



export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const auth = firebase.auth();
    const  provider = new firebase.auth.GoogleAuthProvider();


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("Home")
          }
        })
    
        return unsubscribe
      }, [])


    // const googleSingIn = () =>{
    //     firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //       /** @type {firebase.auth.OAuthCredential} */
    //       var credential = result.credential;
      
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       var token = credential.accessToken;
    //       // The signed-in user info.
    //       var user = result.user;
    //       // ...
    //     }).catch((error) => {
    //       // Handle Errors here.
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       // The email of the user's account used.
    //       var email = error.email;
    //       // The firebase.auth.AuthCredential type that was used.
    //       var credential = error.credential;
    //       // ...
    //     });
      

    // }
      const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }

      const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;

            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }

    return (
        <View
          style={styles.container}
          behavior="padding"
        >
            <Text 
            style={{
                alignSelf:'center',
                fontSize:25,
                marginBottom: 20,
                color:'blue',
                fontWeight:'bold'
            }}>Bongo-E-Food</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
    
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
            //   onPress={handleLogin}
              style={styles.button}
            >
              <Text  
              onPress={googleSingIn}
              style={styles.buttonText}>SingIn With Google</Text>
            </TouchableOpacity> */}
          </View>
          <Text 
          style={{
            marginTop: 50,
            fontSize: 12
          }}>This app is developed by 'Dipraj Howlader'</Text>
          <Text   style={{
            fontSize: 12
          }}>email: dipraj17@cse.pstu.ac.bd</Text>
        </View>
      )
    }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        width: '80%'
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom:2,
      },
      buttonOutline: {
        backgroundColor: 'white',
        // marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 2
      },
    })