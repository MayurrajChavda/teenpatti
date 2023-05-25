import { View, Text, Image, StyleSheet,ScrollView, ImageBackground, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const GameLogin = ({x,y,close,add}) => {
    const [phone,setPhone] = useState("");
    const [pass,setPass] = useState("");
    const [Uname,setUname] = useState("");
    const [Uphone,setUphone] = useState("");
    const [Upass,setUpass] = useState("");
    const [Ucpass,setUcpass] = useState("");

    const userLogin = () => 
    {
        fetch("http://teenpattix.co.in/login.php", {
            method: "POST",
            body: JSON.stringify({ phone, pass }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(res => res.json())
        .then(json => {
            if(json.length>0)
            {
                add(json[0]);
                close(false);
            }
            else
            {
                alert("User not found");
            }
        })
    }
    const userSignIn = () => 
    {
        fetch("http://teenpattix.co.in/signin.php", {
            method: "POST",
            body: JSON.stringify({ name:Uname, phone:Uphone, pass:Upass }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(res => res.json())
        .then((res) => {
            if(res.status)
            {
                add({name:Uname, phone:Uphone, pass:Upass });
                close(false);
            }
        })
        .catch(e=>alert("Phone number is already in use"))
    }
    
    return (
        <View style={[styles.container, { height: y, width: x }]}>
            <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => close(false)}>
                <Image source={require('../images/add.png')} resizeMode='contain' style={{ height: 40, width: 40, transform: [{ rotate: '45deg' }] }} />
            </TouchableOpacity>
            <ImageBackground source={require('../images/Board02.png')} resizeMode='cover' style={{ height: 500, paddingVertical: 80, paddingHorizontal: 20 }}>
            <ScrollView>

                <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'bold'}}>Login</Text>
                <Text style={{color:'white',fontWeight:'bold',marginTop:10}}>Enter phone number : </Text>
                <TextInput value={phone} onChangeText={(e) => setPhone(e)} style={styles.inputs} />
                <Text style={{color:'white',fontWeight:'bold',marginTop:10}}>Enter password : </Text>
                <TextInput value={pass} secureTextEntry onChangeText={(e) => setPass(e)} style={styles.inputs} />
                <TouchableOpacity style={styles.loginBtn} onPress={userLogin}>
                    <Text style={styles.loginTxt}>Login</Text>
                </TouchableOpacity>


                <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'bold',marginTop:50}}>Signin</Text>
                <Text style={{color:'white',fontWeight:'bold',marginTop:10}}>Enter your name : </Text>
                <TextInput value={Uname} onChangeText={(e) => setUname(e)} style={styles.inputs} />
                <Text style={{color:'white',fontWeight:'bold',marginTop:10}}>Enter your phone number : </Text>
                <TextInput value={Uphone} onChangeText={(e) => setUphone(e)} style={styles.inputs} />
                <Text style={{color:'white',fontWeight:'bold',marginTop:10}}>Enter password : </Text>
                <TextInput value={Upass} secureTextEntry onChangeText={(e) => setUpass(e)} style={styles.inputs} />
                <Text style={{color:'white',fontWeight:'bold',marginTop:10}}>Confirm your password : </Text>
                <TextInput value={Ucpass} secureTextEntry onChangeText={(e) => setUcpass(e)} style={styles.inputs} />
                <TouchableOpacity style={styles.loginBtn} onPress={userSignIn}>
                    <Text style={styles.loginTxt}>Signin</Text>
                </TouchableOpacity>

            </ScrollView>    
            </ImageBackground>
        </View>
    )
}

export default GameLogin
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(50,50,50,0.8)',
        zIndex: 1,
        position: 'absolute',
        paddingHorizontal: 30,
        paddingTop: 100
    },
    inputs: {
        fontSize: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    loginBtn: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal:50,
        borderRadius: 5,
        marginVertical: 10,
    },
    loginTxt: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },

})