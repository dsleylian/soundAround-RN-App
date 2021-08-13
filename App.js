import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ConfigureStore } from './redux/configureStore';
import MainNavigation from './navigation/MainNavigation';

const myStore = ConfigureStore();

export default function App() {
    return (
        <Provider store={myStore}>
            <SafeAreaView style={styles.containerStyle}>
                <MainNavigation />
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    }
});