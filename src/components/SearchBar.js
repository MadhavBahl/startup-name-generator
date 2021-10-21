import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
            <TouchableOpacity onPress={()=>onTermSubmit()} activeOpacity={0.6} style={styles.searchButton}>
                <AntDesign name={'search1'} color={'#fff'} size={30}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#4e69ec',
        alignItems:'center'
    }, inputStyle: {
        fontSize: 18,
        flex: 1,
        padding: 10
    },
    searchButton: {
        width: 40,
        height: 40,
        backgroundColor: '#4e69ec',
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        elevation: 3
    }
});

export default SearchBar;