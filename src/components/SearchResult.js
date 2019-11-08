import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchResult = ({startupName}) => {
    console.log ("STARTUP NAME ----- ", startupName);
    return (
        <View style={styles.nameContainer}>
            <Text style={styles.startupName}>{startupName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    nameContainer: {
        flex: 1,
        margin: 5,
        backgroundColor: '#ddd',
        height: 64,
        alignItems: 'center',
        justifyContent: 'center'
    }, startupName: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default SearchResult;