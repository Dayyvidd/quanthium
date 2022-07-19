import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {PieChart, ProgressChart, LineChart} from 'react-native-chart-kit';
import Card from '../../components/card';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

const expenditureData = [
    {
        name: "Jerry",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#585858",
        legendFontSize: 13
    },
    {
        name: "David",
        population: 20538000,
        color: "#81bed3",
        legendFontColor: "#585858",
        legendFontSize: 13
    },
    {
        name: "Sam",
        population: 5276123,
        color: "#dc452d",
        legendFontColor: "#585858",
        legendFontSize: 13
    },
    {
        name: "Chris",
        population: 2899999,
        color: "green",
        legendFontColor: "#585858",
        legendFontSize: 13,
    },
    {
        name: "Others",
        population: 1992000,
        color: "rgba(0, 0, 0, .4)",
        legendFontColor: "#585858",
        legendFontSize: 13
    }
];



const progressData = {
    labels: ["Car", "Rent", "Paris"],
    data: [0.4, 0.8, 0.6],

}

const HomeScreen = () => {
    return(
        <LinearGradient colors = {['#49357e', '#ffffff']} style = {styles.screen}>
            <ScrollView style = {{paddingHorizontal: 20}}>
                <View style = {styles.chartContainer}>
                    <Text style = {styles.chartTitle}>Expenditures</Text>
                    <Card style = {styles.chartCard}>
                        <PieChart
                            data={expenditureData}
                            width={Dimensions.get('window').width - 40}
                            height={220}
                            chartConfig={{
                                color: (opacity = 1) => '#d2d2d2',
                            }}
                            accessor="population"
                            backgroundColor="transparent"
                            paddingLeft="10"
                            absolute = {false}
                        />
                    </Card>
                </View>
                <View style = {styles.chartContainer}>
                    <Text style = {styles.chartTitle}>Goals</Text>
                    <Card style = {styles.chartCard}>
                        <ProgressChart
                            data={progressData}
                            width={Dimensions.get('window').width - 40}
                            height={220}
                            strokeWidth = {13}
                            hideLegend = {false}
                            radius = {32}
                            chartConfig={{
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientToOpacity: 0,
                                color: (opacity = 0.1) => `rgba(157, 96, 213, ${opacity})`,
                                labelColor: (opacity = 1) => `#7F7F7F`,


                                propsForLabels:{
                                    fontSize: 11
                                },
                            }}
                        />
                    </Card>
                </View>
            </ScrollView>
        </LinearGradient>
    )
};

// hide header
HomeScreen.navigationOptions = navData =>{
    return({
        headerShown: false
    })
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    chartContainer: {
        marginVertical: 20,
    },
    chartTitle: {
        marginLeft: 7,
        color: 'white',
        fontSize: 16,
        opacity: 0.5,
        fontWeight: '600'
    },
    chartCard: {
        marginVertical: 10,
        overflow: 'hidden'
    }

});

export default HomeScreen;