/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { GoogleSignin   } from '@react-native-google-signin/google-signin';
import { login } from '../../actions/auth';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '735688775844-e9kou43pukdnustt2107ovl2djbljatd.apps.googleusercontent.com'
        })
    },[])

    async function onGoogleButtonPress() {

        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
          
            console.log(idToken);
            Alert.alert("Success Login")
    
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log(error)
        }   

        // Check if your device supports Google Play

      }

    const onLogin = () => {
        let user = {
            username: username,
            password: password,
        };

        dispatch(login(user))
            .then((response) => {
                if (response.status == 'success') {
                    navigation.replace('HomeScreen');
                }
            }).catch(error => {
                navigation.replace('LoginScreen');
            });
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.headerTittle}>
                Please Login to your Account
            </Text>
            <TextInput
                style={Styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)}
                placeholder='username'
            />
            <TextInput
                style={Styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder='username'
            />
            <Button onPress={() => onLogin()} title='Login' />
            <Button onPress={() => onGoogleButtonPress()} title='Continue With Google' />
        </View>
    )

}

export default Login;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
    },
    input: {
        width: 360,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 10,
        marginVertical: 10,
    },
});