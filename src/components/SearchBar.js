import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.inputStyle}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10
    }, inputStyle: {
        fontSize: 18,
        flex: 1,
        padding: 10
    }
});

export default SearchBar;