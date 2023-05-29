import { View, Text ,StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react'
import GameHeader from '../components/GameHeader'
import LoaderComp from '../components/LoaderComp';

const MainScreen = ({navigation}) => {
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000);
    },[]);
  return (
    <View style={styles.container}>
      <View style={{position:'relative',zIndex:1}}>
        <GameHeader/>
      </View>
      {isLoading?<LoaderComp/>:<></>}
      <ScrollView style={{paddingHorizontal:20}}>
        <TouchableOpacity style={styles.gameCard} onPress={()=>navigation.navigate('TeenPattiGameSceen')}>
          <Image source={require('../images/game01.jpg')} resizeMode='cover' style={styles.gameCardImg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameCard} onPress={()=>navigation.navigate('CardGuessingScreen')}>
          <Image source={require('../images/game01.jpg')} resizeMode='cover' style={styles.gameCardImg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameCard}>
          <Image source={require('../images/game01.jpg')} resizeMode='cover' style={styles.gameCardImg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameCard}>
          <Image source={require('../images/game01.jpg')} resizeMode='cover' style={styles.gameCardImg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameCard}>
          <Image source={require('../images/game01.jpg')} resizeMode='cover' style={styles.gameCardImg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameCard}>
          <Image source={require('../images/game01.jpg')} resizeMode='cover' style={styles.gameCardImg}/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default MainScreen
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#431526',
        flex:1,
        paddingTop:40,
    },
    gameCard:{
      marginTop:20
    },
    gameCardImg:{
      width:'100%',
      height:200,
      borderRadius:20
    }
});