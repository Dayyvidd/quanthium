import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button, Image, TouchableOpacity } from 'react-native';
import {Context} from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = ({navigation}) => {
    const {state, signout} = useContext(Context);
    return (
        <LinearGradient colors = {['#49357e', '#ffffff']} style = {styles.main}>
        <View>
            <Text style={styles.title}>Quanthium</Text>
            <Image source={require('../../assets/pfp.png')} style={styles.image}/>
            <Text style={styles.text}>Hello, User!</Text>
            <TouchableOpacity style={styles.appButtonContainer} >
                <Text style={styles.appButtonText}>Checking: $20000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} >
                <Text style={styles.appButtonText}>Savings: $4000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainers} onPress={() => navigation.navigate('signoutFlow')}>
                <Text style={styles.appButtonTexts}>Signout</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    )
};

// <Button title='Signout' style={[styles.appButtonContainer, styles.appButtonText ]}onPress={() => navigation.navigate('signoutFlow')} ></Button>

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
        marginTop: 50,
    },
    text: {
        marginBottom:25,
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 48,
        fontFamily: 'Helvetica'
    },
    image: {
        marginTop: 25,
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
        marginTop: 175,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "left",
        textTransform: "uppercase"
    },
    appButtonTexts: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }

});

export default ProfileScreen;