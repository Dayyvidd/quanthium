import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground, TextInput, TouchableOpacity
} from 'react-native';

const SigninScreen = ({ navigation }) => {

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
                                <TextInput style={styles.input} placeholder={"Email"}></TextInput>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput secureTextEntry={true} style={styles.input}
                                           placeholder={"Password"}></TextInput>
                            </View>
                            <View style={styles.buttonContainer}>
                                {/*Edit this to check for user authentication*/}
                                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('homeFlow')}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
                                    <Text style={[styles.buttonText, styles.buttonOutlineText]}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
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

});

export default SigninScreen;