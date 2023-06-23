import { View, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useState } from 'react';
const SearchInput = ({placeholder, onSearch}) => {
  
  return (
    <View className='p-5 flex flex-row justify-center align-center  '>
      <TextInput placeholder={placeholder ?? 'Search Here'} onChangeText={(e)=> onSearch(e)} className='bg-gray-200 p-2 rounded-l-sm grow'/>
      <View className='bg-orange-400 flex p-1 rounded-r-sm justify-center'><EvilIcons name="search" size={30} color="white" /></View>
    </View>
  )
};

export default SearchInput;