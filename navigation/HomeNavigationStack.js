import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from '../components/HomeComponent';
import MySounds from '../screens/mySounds';

const Stack = createStackNavigator();

const HomeNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="My Sounds" component={MySounds} />
        </Stack.Navigator>
    );
}

export default HomeNavigation;