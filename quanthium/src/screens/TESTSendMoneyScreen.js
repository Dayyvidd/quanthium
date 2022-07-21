import React, {useContext, useState} from 'react'
import {View, StyleSheet, Text, FlatList, Image, ScrollView, TextInput, Button} from 'react-native';
import HistoryCard from '../../components/HistoryCard';
import {Provider, Context} from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SendMoneyScreen = props => {
    //const [currUser, setCurrUser] = useState("");

    const [email, setEmail] = useState("");
    const [money, setMoney] = useState("");
    const [cards, setCards] = useState([]);
    const {state, lend} = useContext(Context);

    let today = new Date().toLocaleTimeString();

    let balance = state.attr.balance;

    const setItem = async (props) => {
        let cardsArr = [];

        try {
            let stored = await AsyncStorage.getItem('transactions');
            if (stored !== null) {
                cardsArr = JSON.parse(stored);
            }
            cardsArr.push(props);
            await AsyncStorage.setItem('transactions', JSON.stringify(cardsArr));
            console.log("CARDS " + await AsyncStorage.getItem('transactions'));

        } catch(err) {
            console.log(err);
        }
    }

    const getItem = async () => {
        try {
           const transactions = await AsyncStorage.getItem('transactions');
           if (transactions != null) {
               setCards(JSON.parse(transactions));
           }

        } catch(err) {
            console.log(err);
        }
    }

    const handleAddCard = (props) => {
        setCards([...cards, {email: email, money: money, time: today}]);
        setItem({email: email, money: money, time: today})
        setEmail(null);
        setMoney(null);
    }

    const [currBalance, setCurrBalance] = useState(balance);

    return(
        <ScrollView style = {{flex: 1}}>
            <View style = {styles.balanceContainer}>
                <Text style = {styles.availableText}>Available</Text>
                <Text style = {styles.balanceText}>
                    {`$${currBalance.toFixed(2)}`}
                </Text>
            </View>
            <View style = {styles.inputContainer}>
                <TextInput style={styles.input} placeholder={"Send To"} value={email} onChangeText={(text) => setEmail(text)} autoCapitalize={"none"}></TextInput>
                <TextInput style={styles.input} placeholder={"Enter amount"} value={money} onChangeText={(dollars) => setMoney(dollars)} keyboardType="number-pad"></TextInput>
            </View>
            <Button title='Submit' onPress={() => {lend({ amount: money, borrower: email }); setCurrBalance(currBalance - money); handleAddCard();}}/>
            <Button title='Retrieve' onPress={() => {getItem()}}/>
            <View style = {styles.contactSection}>

                <View >
                    {
                        cards.map((item, index) => {
                            //console.log("---" + item.money);
                            return <HistoryCard email={item.email} money={item.money} time={item.time} key={index}/>
                        })
                    }

                </View>
            </View>
        </ScrollView>
    )
}

SendMoneyScreen.navigationOptions = navData =>{
    return({
        headerTitle: "Send Money"
    })
}

const styles = StyleSheet.create({
    balanceContainer: {
        marginTop: 50,
        paddingTop: 20,
        paddingBottom: 50,
        width: '100%',
        alignItems: 'center'
    },
    availableText: {
        color: 'white',
        opacity: 0.5,
        fontSize: 15,
    },
    balanceText: {
        color: 'black',
        fontWeight: '500',
        opacity: 0.85,
        marginVertical: 7,
        fontSize: 45
    },
    contactSection:{
        paddingHorizontal: 20,
        marginBottom: 40
    },
    input: {
        marginBottom: 10,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
    },
    inputContainer: {
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 10,
    },
})

export default SendMoneyScreen;