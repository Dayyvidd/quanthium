import React, { useContext } from 'react';
import {View, StyleSheet, Text, Button, Image, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import {Context} from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather, MaterialIcons, FontAwesome5, AntDesign} from "@expo/vector-icons";
import Card from "../../components/card";
import {BarChart, LineChart, PieChart} from "react-native-chart-kit";
import {ScrollView} from "react-native-gesture-handler";

const ProfileScreen = ({navigation}) => {
    const {state, signout} = useContext(Context);
    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.backgroundImg}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Quanthium</Text>
                <Ionicons name="person-circle" size={32} color="#49357E" style={{flex:0.17, paddingTop: 5, paddingRight: 4}} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style = {{paddingHorizontal: 20}}>
                <View style = {styles.chartContainer}>
                    <TouchableOpacity>
                        <Card style = {styles.chartCard}>
                            <Feather name="lock" size={24} color='#f9eae1' style={styles.iconLogo}/>
                            <Text style = {styles.chartTitle}>Account Security</Text>
                            <MaterialIcons name="navigate-next" size={30} color='#f9eae1' style={styles.iconNext}/>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Card style = {styles.chartCard}>
                            <Ionicons name="person-circle" size={28} color='#f9eae1' style={{paddingLeft: 15,
                                padding: 7}} />
                            <Text style = {{        marginLeft: 38,
                                paddingTop: 12,
                                color: '#f9eae1',
                                fontFamily: 'Helvetica',
                                fontSize: 17,
                                opacity: 1,
                                fontWeight: "bold"}}>Account Set-up</Text>
                            <MaterialIcons name="navigate-next" size={30} color='#f9eae1' style={{marginLeft: 94, marginTop: 6,}}/>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Card style = {styles.chartCard}>
                            <FontAwesome5 name="money-check-alt" size={24} color='#f9eae1' style={styles.iconLogo} />
                            <Text style = {styles.chartTitle}>Loans and Interest</Text>
                            <MaterialIcons name="navigate-next" size={30} color='#f9eae1' style={{marginLeft: 72, marginTop: 6,}}/>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Card style = {styles.chartCard}>
                            <AntDesign name="questioncircle" size={24} color='#f9eae1' style={styles.iconLogo} />
                            <Text style = {{        marginLeft: 38,
                                paddingTop: 12,
                                color: '#f9eae1',
                                fontFamily: 'Helvetica',
                                fontSize: 17,
                                opacity: 1,
                                fontWeight: "bold"}}>Financial Literacy</Text>
                            <MaterialIcons name="navigate-next" size={30} color='#f9eae1' style={{marginLeft: 77, marginTop: 6,}}/>
                        </Card>
                    </TouchableOpacity>

                    <View
                        style={{
                            paddingTop: 25,
                            borderBottomColor: '#49357e',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}/>
                    <Text style={{textAlign: "center",
                        marginTop: 25,
                        paddingBottom: 15,
                        color: '#49357e',
                        fontFamily: 'Helvetica',
                        fontSize: 25,
                        opacity: 0.6,
                        fontWeight: "bold"}}>Account Status</Text>
                </View>

                <Card>
                    <Text style = {{
                        textAlign: "center",
                        padding: 15,
                        color: '#f9eae1',
                        fontFamily: 'Helvetica',
                        fontSize: 17,
                        opacity: 1,
                        fontWeight: "bold"}}>Checking: $1,000</Text>
                </Card>

                <View style={{padding: 10}}/>
                <Card>
                    <Text style = {{
                        textAlign: "center",
                        padding: 15,
                        color: '#f9eae1',
                        fontFamily: 'Helvetica',
                        fontSize: 17,
                        opacity: 1,
                        fontWeight: "bold"}}>Saving: $2,231</Text>
                </Card>

                <TouchableOpacity style={styles.appButtonContainers} onPress={() => navigation.navigate('signoutFlow')}>
                    <Text style={{
                        textAlign: "center",
                        padding: 15,
                        color: '#f9eae1',
                        fontFamily: 'Helvetica',
                        fontSize: 17,
                        opacity: 1,
                        fontWeight: "bold"}}>Signout</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
};


const styles = StyleSheet.create({
    backgroundImg: {
        resizeMode: 'repeat',
        width: '100%',
        height: '100%',
        opacity: 1,
    },
    iconLogo: {
        paddingLeft: 15,
        padding: 10
    },
    iconNext: {
        marginLeft: 90,
        marginTop: 6,
    },
    main: {
        flex: 1,
    },
    title: {
        width: '100%',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#49357e',
        flex: 1,
        paddingRight: 80,
        paddingLeft: 5,
    },
    titleContainer: {
        paddingTop: 40,
        paddingLeft: 10,
        paddingBottom: 25,
        flexDirection: "row",
    },
    chartTitle: {
        marginLeft: 30,
        paddingTop: 12,
        color: '#f9eae1',
        fontFamily: 'Helvetica',
        fontSize: 17,
        opacity: 1,
        fontWeight: "bold"
    },
    chartCard: {
        marginVertical: 10,
        overflow: 'hidden',
        flexDirection: "row"
    },
    chartContainer: {
        marginVertical: 5,
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
    appButtonContainers: {
        elevation: 8,
        backgroundColor: '#cc4322',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 50,
    },
});

export default ProfileScreen;