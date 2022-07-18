import React, { useState, useContext } from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {Context} from '../context/AuthContext';

const LendScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [money, setMoney] = useState("");
    const {state, lend} = useContext(Context);

    return <>
        <Text style={{fontSize: 48}}>LendScreen</Text>
        <Button title={'Lend'} onPress={() => navigation.navigate('Lend')}/>
        <Button title={'Request'} onPress={() => navigation.navigate('Req')}/>
        <TextInput placeholder={"Send To"} value={email} onChangeText={setEmail}></TextInput>
        <TextInput placeholder={"Enter amount"} value={money} onChangeText={setMoney} keyboardType="number-pad"></TextInput>
        <Button title='Submit' onPress={() => {lend({ amount: money, borrower: email })}}></Button>
    </>
};

const styles = StyleSheet.create({});

export default LendScreen;