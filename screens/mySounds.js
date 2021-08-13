import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-context'
import Constants from 'expo-constants';

const MySounds = () => {

    return (
        <View style={styles.pageView}>
            <Text>This is my sound list</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default MySounds;