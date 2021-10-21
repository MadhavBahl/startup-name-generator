import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SearchBar from './SearchBar';
import ResultCard from './ResultCard';

const name = require ('./../lib/startup-name-generator');

const SearchResult = ({keyword}) => {
    const [ keywordsString, onChangeKeywords ] = useState(keyword);
    const [ results, setResults ] = useState([]);

    useEffect(()=>{
      generateStartupNames();
    }, [])

    generateStartupNames = () => {
        let startupNames = name(keywordsString);
        setResults(startupNames);
    }

    return (
        <View style={styles.containerStyle}>
          <Animatable.View animation="bounceIn" style={{padding: 15}}>
            <Text style={styles.heading}>Enter some keywords</Text>
            <Text style={styles.headingTwo}>Separated by space</Text>
            <SearchBar
                term={keywordsString}
                onTermChange={text => onChangeKeywords(text)}
                onTermSubmit={() => generateStartupNames()}
            />
          </Animatable.View>
          <Animatable.View 
            animation="fadeInUpBig"
            style={{
              backgroundColor:'#fff',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              padding: 15,
              paddingTop: 30
            }}
          >
            <FlatList
                data={results}
                keyExtractor={(result) => {
                    return result;
                }}
                renderItem={({ item }) => {
                    return <ResultCard startupName={item} />
                }}
                horizontal={false}
                numColumns={2}
                style={styles.listStyle}
            />
          </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#4e69ec',
    }, heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#fff'
    }, headingTwo: {
      color: '#fff'
    }, listStyle: {
        
    }
});

export default SearchResult;