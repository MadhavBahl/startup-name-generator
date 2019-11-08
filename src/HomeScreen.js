import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

const name = require ('./lib/startup-name-generator');

const HomeScreen = () => {
    const [ keywordsString, onChangeKeywords ] = useState('');
    const [ results, setResults ] = useState([]);

    generateStartupNames = () => {
        let startupNames = name(keywordsString);
        setResults(startupNames);
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.heading}>Enter some keywords</Text>
            <Text style={styles.headingTwo}>Separated by space</Text>
            <SearchBar
                term={keywordsString}
                onTermChange={text => onChangeKeywords(text)}
                onTermSubmit={() => generateStartupNames()}
            />
            <FlatList
                data={results}
                keyExtractor={(result) => {
                    return result;
                }}
                renderItem={({ item }) => {
                    return <SearchResult startupName={item} />
                }}
                horizontal={false}
                numColumns={2}
                style={styles.listStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginHorizontal: 15,
        flex: 1
    }, heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    }, headingTwo: {

    }, listStyle: {
        
    }
});

export default HomeScreen;