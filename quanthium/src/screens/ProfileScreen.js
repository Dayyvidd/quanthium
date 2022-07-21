import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import {Context} from '../context/AuthContext';

const ProfileScreen = ({navigation}) => {
    const {state, signout} = useContext(Context);
    return (
        <View style={styles.main}>
            <Image source={require('../../assets/pfp.png')} style={styles.image}/>
            <Text style={styles.text}>Cash</Text>
            <Button title='Signout' style={styles.button} onPress={() => navigation.navigate('signoutFlow')} ></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    text: {
        marginBottom:50,
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 48,
    },
    image: {
        marginTop: 100,
        width: 100,
        height: 100,
        alignSelf: 'center',
    }

});

export default ProfileScreen;