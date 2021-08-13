import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-context'
import Constants from 'expo-constants';

const HomeComponent = ({navigation}) => {

    return (

        <View style={styles.pageView}>
            <Text>Choose a Sound</Text>
            <Button 
                title="Go to my sounds"
                onPress={() => navigation.navigate('My Sounds') }
            ></Button>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('My Sounds')}
                >
                    <Text>B</Text>
                </TouchableOpacity>
            </View>
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


export default HomeComponent;