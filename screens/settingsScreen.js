import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const SettingsScreen = () => {

    return (
        <View style={styles.pageView}>
            <Text>This is my settings</Text>
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


export default SettingsScreen;