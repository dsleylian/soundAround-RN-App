import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-context'
import Constants from 'expo-constants';


const AllSounds = () => {

    return (
        <View style={styles.pageView}>
            <Text>These are all the sounds</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        alignItems: 'center',
    },
});

export default AllSounds;