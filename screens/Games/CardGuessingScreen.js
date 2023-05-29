import { View,Text, Image, StyleSheet, TouchableOpacity, Dimensions, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import GameHeader from '../../components/GameHeader';

const CardGuessingScreen = ({ navigation }) => {
    const [card, setCard] = useState(require('../../images/game2.png'));
    const [score,setScore] = useState(0);
    const [selectedAmount,setSelectedAmount] = useState(0);
    const [gameStart, setGameStart] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [array, setArray] = useState([]);
    const [bombNum, setBombNum] = useState([]);

  function generateUniqueNumbersArray(length, min, max) {
    if (length > max - min + 1) {
      throw new Error("Length of the array should not exceed the range of numbers.");
    }
  
    const numbers = new Set();
    while (numbers.size < length) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNumber);
    }
  
    return Array.from(numbers);
  }

  function generateRandomArray(length) {
    const array = new Array(length).fill(1);
    return array;
  }

  useEffect(() => {
    setGameOver(false);
    const initialArray = generateRandomArray(25);
    setArray(initialArray);
    setBombNum(generateUniqueNumbersArray(5,0,24));
    setX(Dimensions.get('window').width);
    setY(Dimensions.get('window').height);
  }, [gameOver]);

  const handleImagePress = (index) => {
    if(bombNum.includes(index))
    {
        alert('Game Over');
        setGameOver(true);
    }
    else
    {
        setScore(score+(selectedAmount/100));
        setSelectedAmount(selectedAmount*2);
        const newArray = [...array];
        newArray[index] = 0; // Set the value to hide the image
        setArray(newArray);
    }
  };
  const gameIsOn = (amount) =>
  {
    setGameStart(true);
    setSelectedAmount(amount);
  }

  return (
    <View style={styles.container}>
      <GameHeader/>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={{ paddingHorizontal: 20 }} >
        <Image source={require('../../images/goback.png')} resizeMode='contain' style={{ height: 40, width: 40 }} />
      </TouchableOpacity>
      <View style={{margin:20}}>
          <Text style={{color:'white',fontSize:30,textAlign:'center'}}>Score : {score.toFixed(5)}</Text>
      </View>
      {
        gameStart?
        <>
            <View style={styles.row}>
            {array.length > 0 && array.map((value, index) => (
            <TouchableOpacity key={index} style={{ width: (x - 40) / 5, height: (x - 40) / 5 }} onPress={() => handleImagePress(index)}>
                {value === 1 && <Image source={require('../../images/game2.png')} resizeMode='contain' style={{ width: (x - 40) / 5, height: (x - 40) / 5 }} />}
            </TouchableOpacity>
            ))}
        </View>
      </>
      :<View style={{paddingHorizontal:20}}>
        <Text style={{color:'white',textAlign:'center',marginVertical:20,fontSize:20}}>Select your amount</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style={{backgroundColor:'yellow',width:(x-50)/2,justifyContent:'center'}} onPress={()=>gameIsOn(10)}>
                <Text style={{textAlign:'center',fontSize:40,paddingVertical:20}}>10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'yellow',width:(x-50)/2,justifyContent:'center'}} onPress={()=>gameIsOn(15)}>
                <Text style={{textAlign:'center',fontSize:40,paddingVertical:20}}>15</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <TouchableOpacity style={{backgroundColor:'yellow',width:(x-50)/2,justifyContent:'center'}} onPress={()=>gameIsOn(20)}>
                <Text style={{textAlign:'center',fontSize:40,paddingVertical:20}}>20</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'yellow',width:(x-50)/2,justifyContent:'center'}} onPress={()=>gameIsOn(25)}>
                <Text style={{textAlign:'center',fontSize:40,paddingVertical:20}}>25</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <TouchableOpacity style={{backgroundColor:'yellow',width:(x-50)/2,justifyContent:'center'}} onPress={()=>gameIsOn(50)}>
                <Text style={{textAlign:'center',fontSize:40,paddingVertical:20}}>50</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'yellow',width:(x-50)/2,justifyContent:'center'}} onPress={()=>gameIsOn(100)}>
                <Text style={{textAlign:'center',fontSize:40,paddingVertical:20}}>100</Text>
            </TouchableOpacity>
        </View>
    </View>
      }
    </View>
  );
};

export default CardGuessingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#431526'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});
