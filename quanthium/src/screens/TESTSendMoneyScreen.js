import React, {useContext, useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    Button,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';
import HistoryCard from '../../components/HistoryCard';
import {Context} from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";



const SendMoneyScreen = props => {
    //const [currUser, setCurrUser] = useState("");

    const [email, setEmail] = useState("");
    const [money, setMoney] = useState("");
    const [cards, setCards] = useState([]);
    const {state, lend} = useContext(Context);
    const [text, setText] = useState("");
    const onChange = (textValue) => setText(textValue);

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
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.backgroundImg}>
            <View style = {styles.balanceContainer}>
                <Text style = {styles.availableText}>Available</Text>
                <Text style = {styles.balanceText}>
                    {`$${currBalance.toFixed(2)}`}
                </Text>
            </View>
            <View style = {styles.inputContainer}>
                <TextInput style={styles.input} placeholder={"Send To"} value={email} onChangeText={(text) => setEmail(text)} autoCapitalize={"none"}></TextInput>
                <TextInput style={styles.input} placeholder={"Enter amount"} value={money} onChangeText={(dollars) => setMoney(dollars)} keyboardType="number-pad"></TextInput>
                <TextInput style={styles.input} onChangeText={onChange}
                           value={text} placeholder={"Payback date [mm/dd/yyyy]"} autoCapitalize={"none"}></TextInput>
            </View>

            <View style={styles.buttonBox}>
                <TouchableOpacity onPress={() => {lend({ amount: money, borrower: email }); setCurrBalance(currBalance - money); handleAddCard(); setText("");}}>
                    <Image source={require('../../assets/submit-button.png')}/>
                </TouchableOpacity>
                <TouchableOpacity oonPress={() => {getItem()}}>
                    <Image source={require('../../assets/retreive-button.png')}/>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
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
        </ImageBackground>
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
        fontSize: 25,
        paddingBottom: 10,
        fontWeight: "500"
    },
    balanceText: {
        color: "#49357E",
        fontWeight: "bold",
        opacity: 0.85,
        marginVertical: 7,
        fontSize: 45,
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
    backgroundImg: {
        resizeMode: 'repeat',
        width: '100%',
        height: '100%',
        opacity: 1,
    },
    buttonBox: {
        alignItems: "center",
        paddingTop: 4
    }


})

export default SendMoneyScreen;