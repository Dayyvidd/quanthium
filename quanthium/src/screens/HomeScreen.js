import React from 'react';
import {View, StyleSheet, Text, Dimensions, ImageBackground} from 'react-native';
import {LineChart, PieChart, ProgressChart} from 'react-native-chart-kit';
import Card from '../../components/card';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const savingsData = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
        data: [
            312.21,
            192.23,
            212.98,
            -30.81,
            0,
            192.98,
            Math.random() * 100,
        ]
    }]
}

const transactionData = [
    {
        name: "Jerry",
        population: 45,
        color: "#C2948A",
        legendFontColor: '#f9eae1',
        legendFontSize: 13
    },
    {
        name: "David",
        population: 25,
        color: "#7EA8BE",
        legendFontColor: '#f9eae1',
        legendFontSize: 13
    },
    {
        name: "Sam",
        population: 20,
        color: "#FFEADF",
        legendFontColor: '#f9eae1',
        legendFontSize: 13
    },
    {
        name: "Chris",
        population: 15,
        color: "#BBB193",
        legendFontColor: '#f9eae1',
        legendFontSize: 13,
    },
];

const progressData = {
    labels: ["Malcom", "Jamie", "Michelle + Theresa"],
    data: [0.4, 0.8, 0.6],

}

const HomeScreen = () => {
    return(
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.backgroundImg}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Quanthium</Text>
                <Ionicons name="ios-notifications" size={26.5} color="#49357E" style={{flex:0.17, paddingTop: 5}}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style = {{paddingHorizontal: 20}}>
                <View style = {styles.chartContainer}>
                    <Text style = {[styles.chartTitle, styles.centerTitle]}>Updated Quanthium Score</Text>
                    <Card style = {styles.scoreContainer}>
                        <Text style = {styles.creditScore}>96.2</Text>
                        <Text style={styles.creditUpdate}>- 2.1</Text>
                        <Text style={{color: '#f9eae1', paddingBottom: 13, alignItems: "center"}}>[missed payment to Malcom]</Text>
                    </Card>
                </View>

                <View style = {styles.chartContainer}>
                    <Text style = {styles.chartTitle}>Account Balance</Text>
                    <Card style = {styles.chartCard}>
                        <LineChart
                            data = {savingsData}
                            width = {Dimensions.get('window').width - 40}
                            height = {250}
                            withVerticalLines = {false}
                            yAxisLabel = '$'
                            bezier={true}
                            withDots = {false}
                            chartConfig = {{
                                backgroundColor: "#49357E",
                                backgroundGradientFrom: "#49357E",
                                backgroundGradientFromOpacity: 1,
                                backgroundGradientTo: "#49357E",
                                backgroundGradientToOpacity: 1,
                                fillShadowGradient: '#9D60D5',
                                fillShadowGradientOpacity: 0.5,
                                color: (opacity = 1) => '#9D60D5',
                            }}
                        />
                    </Card>
                </View>

                <View style = {styles.chartContainer}>
                    <Text style = {styles.chartTitle}>Your Lending Portfolio</Text>
                    <Card style = {styles.chartCard}>
                        <PieChart
                            doughnut={true}
                            data={transactionData}
                            width={Dimensions.get('window').width - 40}
                            height={140}
                            chartConfig={{
                                color: (opacity = 1) => '#f9eae1',
                            }}
                            accessor="population"
                            backgroundColor="transparent"
                            paddingLeft="10"
                            absolute = {false}
                            style={{paddingBottom: 148}}
                        />
                    </Card>
                </View>

                <View style = {styles.chartContainer}>
                    <Text style = {styles.chartTitle}>Your Debt Portfolio</Text>
                    <Card style = {styles.chartCard}>
                        <ProgressChart
                            data={progressData}
                            width={Dimensions.get('window').width - 40}
                            height={220}
                            strokeWidth = {13}
                            hideLegend = {false}
                            radius = {20}
                            chartConfig={{
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientToOpacity: 0,
                                color: (opacity = 0.1) => `rgba(157, 96, 213, ${opacity})`,
                                labelColor: (opacity = 1) => `#f9eae1`,
                                propsForLabels:{
                                    fontSize: 12
                                },
                            }}
                            style={{paddingRight: 148}}
                            padding
                        />
                    </Card>
                </View>
            </ScrollView>
        </ImageBackground>
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
        marginVertical: 5,
    },
    chartTitle: {
        marginLeft: 7,
        color: '#49357e',
        fontFamily: 'Helvetica',
        fontSize: 16,
        opacity: 0.6,
        fontWeight: "bold"
    },
    chartCard: {
        marginVertical: 10,
        overflow: 'hidden'
    },
    backgroundImg: {
        resizeMode: 'repeat',
        width: '100%',
        height: '100%',
        opacity: 1,
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
        paddingBottom: 10,
        flexDirection: "row",
    },
    creditScore: {
        color: 'rgb(157, 96, 213)',
        fontFamily: 'Helvetica',
        fontSize: 60,
        opacity: 0.85,
        fontWeight: "400",
        flex: 1,
        marginTop: 5,
    },
    scoreContainer: {
        flexDirection: "column",
        marginHorizontal: 50,
        marginVertical: 5,
        alignItems: "center"
    },
    creditUpdate: {
        flex: 1,
        color: '#cc4322',
        fontFamily: 'Helvetica',
        fontSize: 28,
        fontWeight: "500",
        opacity: 1,
        paddingTop: 2
    },
    centerTitle: {
        textAlign: "center",
    }


});

export default HomeScreen;