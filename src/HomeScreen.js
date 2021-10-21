import React, { useState } from 'react';
import {
   View
} from 'react-native';
import Initial from './components/Initial';
import SearchResult from './components/SearchResult';

const HomeScreen = () => {
   const [initial, setInitial] = useState(true);
   const [keywordString, setKeywordString] = useState('');

   return(
      <View style={{flex:1}}>
         {
            initial?(
               <Initial onSearch={(keyword)=>{
                     setKeywordString(keyword);
                     setInitial(false);
                  }}
               />
            ):<SearchResult keyword={keywordString}/>
         }
      </View>
   )
}

export default HomeScreen;
