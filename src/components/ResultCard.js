import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultCard = ({startupName}) => {
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
        backgroundColor: '#4e69ec',
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }, startupName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default ResultCard;