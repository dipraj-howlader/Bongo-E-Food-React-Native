import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function SignIn() {

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }

    function GoogleSignIn() {
        return (
          <Button
            title="Google Sign-In"
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
          />
        );
      }

  return (
    <View>
      {/* <Text>SignIn</Text> */}
      <GoogleSignIn></GoogleSignIn>
    </View>
  )
}