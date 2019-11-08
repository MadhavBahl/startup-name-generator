import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchResult = ({startupName}) => {
    console.log ("STARTUP NAME ----- ", startupName);
    return (
        <View style={styles.nameContainer}>
            <Text>{startupName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    nameContainer: {
        flex: 1,
        margin: 5,
        backgroundColor: '#ddd',
        height: 70,
    }
});

export default SearchResult;