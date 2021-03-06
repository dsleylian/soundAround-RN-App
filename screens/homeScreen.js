import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from '../components/HomeComponent';
import MySounds from '../screens/mySounds';
import HomeNavigation from '../navigation/HomeNavigationStack';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {

    return (
        <HomeNavigation />

    );
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        alignItems: 'center',
    },
});


export default HomeScreen;