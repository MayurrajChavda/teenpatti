import { View, Text, StyleSheet, ImageBackground,Dimensions,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState }  from 'react'
import GameHeader from '../../components/GameHeader'
import LoaderComp from '../../components/LoaderComp';

const TeenPattiGameSceen = ({navigation}) => {
    const [isLoading,setIsLoading] = useState(true);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false)
          },2000);
        setX(Dimensions.get('window').width);
        setY(Dimensions.get('window').height);
      }, []);
  return (
    <View style={styles.container}>
        <GameHeader/>
        {isLoading?<LoaderComp/>:<></>}
        <View style={{paddingHorizontal:20}}>
            <ImageBackground source={require('../../images/tablewithmodel.png')}
             resizeMode='contain' style={{width:'100%',height:500}}>
                <TouchableOpacity onPress={()=>navigation.navigate('MainScreen')}>
                    <Image source={require('../../images/goback.png')} resizeMode='contain' style={{ height: 40, width: 40}} />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    </View>
  )
}

export default TeenPattiGameSceen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        backgroundColor:'#431526'
    },
});