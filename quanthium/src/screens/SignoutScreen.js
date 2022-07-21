import React, { useState, useContext } from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

const SignoutScreen = ({ navigation }) => {
    const {state, signout} = useContext(Context);
    return (
        <LinearGradient colors = {['#49357e', '#ffffff']} style = {styles.main}>
        <View >
            <Text style={styles.title}> Quanthium </Text>
            <Text style={styles.text}>Signed Out!</Text>
            <TouchableOpacity style={styles.appButtonContainers}>
                <Text style={styles.appButtonText} onPress={() => navigation.navigate('loginFlow')}>Back to Login</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>

    )
};

//<Button title='Back to Login' onPress={() => navigation.navigate('loginFlow')} style={styles.buttonText} ></Button>

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    title: {
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 48,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        marginTop: 100,
    },
    text: {
        marginBottom:25,
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 48,
        fontFamily: 'Helvetica',
        marginTop: 150,
    },
    image: {
        marginTop: 100,
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "purple",
        borderRadius: 20,
        paddingVertical: 40,
        paddingHorizontal: 10,
        marginTop: 50,
    },
    appButtonContainers: {
        elevation: 8,
        backgroundColor: "purple",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 150,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

});

export default SignoutScreen;