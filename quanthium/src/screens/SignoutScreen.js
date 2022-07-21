import React, { useState, useContext } from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/AuthContext';

const SignoutScreen = ({ navigation }) => {
    const {state, signout} = useContext(Context);
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Signed Out!</Text>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
                <Text style={[styles.buttonContainer, styles.buttonText, styles.buttonOutlineText]} onPress={() => navigation.navigate('loginFlow')}>Back to Login</Text>
            </TouchableOpacity>
        </View>


    )
};

//<Button title='Back to Login' onPress={() => navigation.navigate('loginFlow')} style={styles.buttonText} ></Button>

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        marginTop: 100,
        marginBottom: 100,
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 48,
    },
    button: {
        width: '75%',
        marginTop: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#49357e',
        borderRadius: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: '#49357e',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        justifyContent: 'center',
        textAlign: "center",
        padding: 10,
    },
    buttonOutlineText: {
        color: '#49357e',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonContainer: {
        width: '60%',
        marginTop: 15,
    },
});

export default SignoutScreen;