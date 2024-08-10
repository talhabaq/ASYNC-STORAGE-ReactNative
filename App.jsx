import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const App = () => {
  const [name,setName]=useState("")
  const setData= async ()=>{
    await  AsyncStorage.setItem("name","TALHA")
  }
  const getData=async ()=>{
    const name= await AsyncStorage.getItem("name")
    setName(name)
  }
  const removeData=async()=>{
    await AsyncStorage.removeItem("name")
    setName('')
  }
  return (
    <View >
      <Text style={{fontSize:40}}> ASYNC STORAGE | {name} </Text>
      <Button title="Set Data" onPress={setData}/>
      <Button title="Get Data" onPress={getData}/>
      <Button title="Remove Data" onPress={removeData}/>
    </View>
  )
}

export default App
