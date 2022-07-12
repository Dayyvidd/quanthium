import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {TouchableWithoutFeedback, Keyboard} from "react-native";


export default function App() {

    const image = {url: "./assets/finance_pattern.jpg"};

    return (
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
            <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
                <View>
                    <ImageBackground source={require('./assets/finance_pattern.jpg')} style={styles.backgroundImg}>
                        <View style={styles.mainView}>

                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Quanthium</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} placeholder={"Email"}></TextInput>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput secureTextEntry={true} style={styles.input} placeholder={"Password"}></TextInput>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
                                    <Text style={[styles.buttonText, styles.buttonOutlineText]}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    imgContainer: {
        opacity: 0.1
    },
    backgroundImg: {
        resizeMode: 'repeat',
        width: '100%',
        height: '100%',
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e5e5e5',
        opacity: 0.95,
    },
    title: {
        width: '100%',
        fontSize: 55,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#3f37c9'
    },
    titleContainer: {

        padding: 20,
        marginBottom: 20,
        //borderColor: 'black',
        //borderWidth: 10,
    },
    input: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    inputContainer: {
        width: '70%',
        marginTop: 10,
    },
    button: {
        width: '100%',
        marginTop: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3d3195',
        borderRadius: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: '#3d3195',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#3d3195',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonContainer: {
        width: '60%',
        marginTop: 15,
    },

});
