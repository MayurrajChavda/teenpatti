import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import GameSettings from './GameSettings';
import GameLogin from './GameLogin';
import GameProfile from './GameProfile';

const GameHeader = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [user, setUser] = useState(null);
  const [topWindow, setTopWindow] = useState(false);
  const [settingWindow, setSettingWindow] = useState(false);
  const [mode, setMode] = useState(0);
  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(data));
      getData();
      setMode(1);
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      setUser(null);
      setMode(0);
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) {
        setUser(JSON.parse(value));
        setMode(1);
      } else {
        setMode(0);
      }
    } catch (error) {
      return error;
    }
  };

  const profileBtn = () =>
  {
    setTopWindow(true);
  }

  const OpenSettings = () =>
  {
    setSettingWindow(true);
  }

  useEffect(() => {
    getData();
    setX(Dimensions.get('window').width);
    setY(Dimensions.get('window').height);
  }, []);
  return (
    <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between',position: 'relative', zIndex: 1 }}>
      <View style={{ position: 'absolute', zIndex: 2 }}>
        {mode==0&&topWindow?<GameLogin x={x} y={y} close={setTopWindow} add={saveData}/>:<></>}
        {mode==1&&topWindow?<GameProfile x={x} y={y} close={setTopWindow} data={user} logout={deleteData}/>:<></>}
        {settingWindow?<GameSettings x={x} y={y} close={setSettingWindow} />:<></>}
      </View>
      <View>
        <TouchableOpacity onPress={profileBtn}>
          <Image source={require('../images/addLable.png')} resizeMode='contain' style={{ height: 30, width: 90 }} />
          <Text style={{ position: 'absolute', top: 5, left: 30 }}>{user?user.name:"Guste"}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../images/addLable.png')} resizeMode='contain' style={{ height: 30, width: 90 }} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={OpenSettings}>
          <Image source={require('../images/settings_icon.png')} resizeMode='cover' style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GameHeader
