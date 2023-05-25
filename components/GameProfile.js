import { View,Text,Image,StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const GameProfile = ({x,y,close,data,logout}) => {
    return (
    <View style={[styles.container,{height: y,width: x}]}>
        <TouchableOpacity style={{alignItems:'flex-end'}} onPress={()=>close(false)}>
            <Image source={require('../images/add.png')} resizeMode='contain' style={{height:40,width:40,transform:[{rotate:'45deg'}]}}/>
        </TouchableOpacity>
        <ImageBackground source={require('../images/Board02.png')} resizeMode='cover' style={{height:500}}>
            <View style={styles.userDetails}>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold',textAlign:'center',marginBottom:20}}>Profile</Text>
                <Text style={{color:'white',fontSize:15}}>Name : {data?data.name:"-"}</Text>
                <Text style={{color:'white',fontSize:15}}>Phone : {data?data.phone:"-"}</Text>
                <TouchableOpacity style={styles.loginOutBtn} onPress={()=>{logout();close(false);}}>
                    <Text style={styles.loginOutTxt}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  )
}

export default GameProfile
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(50,50,50,0.8)',
        zIndex: 1,
        position: 'absolute',
        paddingHorizontal:30,
        paddingTop:100
    },
    userDetails:{
        paddingTop:60,
        paddingHorizontal:30
    },
    loginOutBtn: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
    },
    loginOutTxt: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
})