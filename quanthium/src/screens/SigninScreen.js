import {
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground, TextInput, TouchableOpacity
} from 'react-native';
import React, { useState, useContext } from 'react';
import {Context} from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { state, signin, signup } = useContext(Context);
    return (
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
            <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
                <View>

                    <ImageBackground source={require('../../assets/login-back.jpg')} style={styles.backgroundImg}>

                        <View style={styles.mainView}>

                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Quanthium</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={email}
                                    placeholder={"Email"}
                                    onChangeText={setEmail}
                                    autoCapitalize="none"
                                    autoCorrect={false}>
                                </TextInput>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    secureTextEntry={true}
                                    value={password}
                                    style={styles.input}
                                    placeholder={"Password"}
                                    onChangeText={setPassword}
                                    autoCapitalize="none"
                                    autoCorrect={false}>
                                </TextInput>
                            </View>
                            { state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText} onPress={() => {signin({ email, password })}}>Login</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
                                    <Text style={[styles.buttonText, styles.buttonOutlineText]} onPress={() => {signup({email, password})}}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    imgContainer: {
        opacity: 0.1
    },
    backgroundImg: {
        resizeMode: 'repeat',
        width: '100%',
        height: '100%',
        opacity: .95,
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        fontSize: 55,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#49357e'
    },
    titleContainer: {
        padding: 20,
        marginBottom: 70,
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
    errorMessage: {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    }

});

export default SigninScreen;