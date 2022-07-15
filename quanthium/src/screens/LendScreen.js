import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const LendScreen = ({ navigation }) => {
    return <>
        <Text style={{fontSize: 48}}>LendScreen</Text>
        <Button title={'Lend'} onPress={() => navigation.navigate('Lend')}/>
        <Button title={'Request'} onPress={() => navigation.navigate('Req')}/>
    </>
};

const styles = StyleSheet.create({});

export default LendScreen;