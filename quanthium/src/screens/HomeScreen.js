import React from 'react';
import {View, StyleSheet, Text, Dimensions, ImageBackground} from 'react-native';
import {LineChart, PieChart, ProgressChart, BarChart} from 'react-native-chart-kit';
import Card from '../../components/card';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const savingsData = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
        data: [
            Math.random() * 100 + 300,
            592.23,
            Math.random() * 100 + 200,
            -3.81,
            500,
            392.98,
            Math.random() * 100 + 900,
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

const debtData = {
    labels: ["Malcom", "Jamie", "Michelle + Theresa"],
    datasets: [
        {
            data: [59, 12, 97]
        }
    ]
};

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
                        <View style={styles.creditUpdateBox}>
                            <AntDesign name="arrowdown" size={24} color='#cc4322' style={{paddingTop: 3, paddingLeft: 90}}/>
                            <Text style={styles.creditUpdate}>2.1</Text>
                        </View>
                        <Text style={styles.paymentStatus}>Missed payment to Malcom</Text>
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
                            style={{paddingTop: 13}}
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
                        <BarChart
                            data={debtData}
                            width={Dimensions.get('window').width - 40}
                            height={220}
                            yAxisSuffix="%"
                            fromZero={true}
                            showBarTops={true}
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
                            style={{paddingTop: 15}}
                        />
                        <Text style={styles.paymentStatus}>Upcoming payment of $239.12 to Jamie on 07/22/2022</Text>
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
        marginBottom: -8,
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
    },
    paymentStatus: {
        marginLeft: 7,
        color: '#f9eae1',
        fontFamily: 'Helvetica',
        fontSize: 16,
        opacity: .9,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
    },
    creditUpdateBox: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center"
    }

});

export default HomeScreen;