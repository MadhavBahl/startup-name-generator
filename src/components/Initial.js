import React, { useState } from 'react';
import { 
    View, 
    Text,
    Dimensions,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import SearchBar from './SearchBar';

const Initial = ({onSearch}) => {
    const [ keywordsString, onChangeKeywords ] = useState('');

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
        <View style={styles.header}>
            <Animatable.Text 
                animation="bounceIn" 
                duraton="1500" 
                style={[styles.title, {
                    color: '#4e69ec'
            }]}>Startup Name Generator</Animatable.Text>
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: '#4e69ec'
            }]}
            animation="fadeInUpBig"
        >
            <Text style={{color: '#fff', fontSize: 18, marginTop: 10}}>Enter some keywords</Text>
            <Text style={{color: '#fff'}}>Separated by space</Text>
            <SearchBar
                term={keywordsString}
                onTermChange={text => onChangeKeywords(text)}
                onTermSubmit={() => onSearch(keywordsString)}
            />
        </Animatable.View>
      </KeyboardAvoidingView>
    );
};

export default Initial;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      backgroundColor: '#fff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 50
  },
  title: {
      color: '#05375a',
      fontSize: 26,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      backgroundColor: '#08d4c4'
   },
   textSign: {
      color: 'white',
      fontWeight: 'bold'
   }
});