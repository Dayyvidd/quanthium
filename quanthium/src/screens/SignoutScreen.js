import React, { useState, useContext } from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

const SignoutScreen = ({ navigation }) => {
    const {state, signout} = useContext(Context);
    return (
        <LinearGradient colors = {['#49357e', '#ffffff']} style = {styles.main}>
        <View style={styles.mainView}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Quanthium</Text>
            </View>
            <View>
                <Text style={{width: '100%',
                    fontSize: 30,
                    fontWeight: 'bold',
                    fontFamily: 'Helvetica',
                    color: 'rgba(73,53,126,0.63)'}}>You have Signed Out!</Text>
            </View>
            <TouchableOpacity style={styles.appButtonContainers}>
                <Text style={styles.appButtonText} onPress={() => navigation.navigate('loginFlow')}>Back to Login</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>

    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        padding: 20,
        marginBottom: 20,
    },
    title: {
        width: '100%',
        fontSize: 55,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#49357e',
        paddingTop: 80
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
    appButtonContainers: {
        elevation: 8,
        backgroundColor: '#49357e',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 18,
        marginTop: 250,
    },
    appButtonText: {
        fontSize: 18,
        color: '#f9eae1',
        fontFamily: 'Helvetica',
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

});

export default SignoutScreen;