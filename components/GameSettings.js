import { View,Text,Image,StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const GameSettings = ({x,y,close}) => {
  return (
    <View style={[styles.container,{height: y,width: x}]}>
        <TouchableOpacity style={{alignItems:'flex-end'}} onPress={()=>close(false)}>
            <Image source={require('../images/add.png')} resizeMode='contain' style={{height:40,width:40,transform:[{rotate:'45deg'}]}}/>
        </TouchableOpacity>
        <ImageBackground source={require('../images/Board02.png')} resizeMode='cover' style={{height:500}}>
        </ImageBackground>
    </View>
  )
}

export default GameSettings
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(50,50,50,0.8)',
        zIndex: 1,
        position: 'absolute',
        paddingHorizontal:30,
        paddingTop:100
    }
})