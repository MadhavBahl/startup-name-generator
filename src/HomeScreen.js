import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';

const name = require ('./lib/startup-name-generator');

const HomeScreen = () => {
    console.log ('HI');
    console.log(name('cloud run fit'));

    const [ keywordsString, onChangeKeywords ] = useState('');
    const [ results, setResults ] = useState([]);

    generateStartupNames = () => {
        let startupNames = name(keywordsString);
        setResults(startupNames);
    }

    return (
        <View>
            <Text>This is startup name generatorsss</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeKeywords(text)}
                placeHolder="Enter Space Separated Keywords"
                value={keywordsString}
                onEndEditing={() => generateStartupNames()}
            />
            <Text>Keywords - {keywordsString}</Text>
            <FlatList
                data={results}
                keyExtractor={(result) => {
                    return result;
                }}
                renderItem={({ item }) => {
                    return <Text> {item} </Text>  
                }}
                horizontal={false}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;