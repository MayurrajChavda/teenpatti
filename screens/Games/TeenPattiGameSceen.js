import { View, Text,Animated, StyleSheet, ImageBackground,Dimensions,Image,TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, useState }  from 'react';
import GameHeader from '../../components/GameHeader'
import LoaderComp from '../../components/LoaderComp';
import { SuffleCards,generateUniqueRandomArray,CardsImgUrl } from '../../components/Cards';
import randomPlayers from '../../components/PlayersDetails'
const TeenPattiGameSceen = ({navigation}) => {
    const [player11,setPlayer11] = useState(CardsImgUrl[52]);
    const [player12,setPlayer12] = useState(CardsImgUrl[52]);
    const [player13,setPlayer13] = useState(CardsImgUrl[52]);

    const [player21,setPlayer21] = useState(CardsImgUrl[52]);
    const [player22,setPlayer22] = useState(CardsImgUrl[52]);
    const [player23,setPlayer23] = useState(CardsImgUrl[52]);

    const [player31,setPlayer31] = useState(CardsImgUrl[52]);
    const [player32,setPlayer32] = useState(CardsImgUrl[52]);
    const [player33,setPlayer33] = useState(CardsImgUrl[52]);

    const [player41,setPlayer41] = useState(CardsImgUrl[52]);
    const [player42,setPlayer42] = useState(CardsImgUrl[52]);
    const [player43,setPlayer43] = useState(CardsImgUrl[52]);

    const [player1,setPlayer1] = useState(CardsImgUrl[52]);
    const [player2,setPlayer2] = useState(CardsImgUrl[52]);
    const [player3,setPlayer3] = useState(CardsImgUrl[52]);

    const [allPlayersCards,setAllPlayersCards] = useState([]);
    const animatedValueX = useRef(new Animated.Value(0)).current;
    const animatedValueY = useRef(new Animated.Value(0)).current;
    const [isLoading,setIsLoading] = useState(true);
    const [cardDisplay,setCardDisplay] = useState('none');
    const [fourNum,setFourNum] = useState([0,0,0,0]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [chaalAmount, setChaalAmount] = useState(10);
    
    useEffect(() => {
        setAllPlayersCards(SuffleCards());
        setFourNum(generateUniqueRandomArray);   
        setTimeout(()=>{
            setIsLoading(false,StartAnimation());
        },1000);
        setX(Dimensions.get('window').width);
        setY(Dimensions.get('window').height);
    }, []);
    
    const StartAnimation =()=>
    {
        const positionsX = [100, 100, 0, -100, -100,100, 100, 0, -100, -100,100, 100, 0, -100, -100,0]; // X positions for each player
        const positionsY = [-50, 100, 200, 80, -50,-50, 100, 200, 80, -50,-50, 100, 200, 80, -50,0]; // Y positions for each player
        const iterations = 16; // Number of times to run the animation
        let currentIteration = 0; // Counter to keep track of animation iterations
    
        const animation = () => {
          const toValueX = positionsX[currentIteration]; // X position for the current player
          const toValueY = positionsY[currentIteration]; // Y position for the current player
    
          Animated.parallel([
            Animated.timing(animatedValueX, {
              toValue: toValueX,
              duration: 100, // Set the duration of each card animation (in milliseconds)
              useNativeDriver: true,
            }),
            Animated.timing(animatedValueY, {
              toValue: toValueY,
              duration: 100, // Set the duration of each card animation (in milliseconds)
              useNativeDriver: true,
            }),
          ]).start(() => {
            currentIteration++;
    
            if (currentIteration < iterations) {
              // If there are more iterations remaining, start the next animation
              animatedValueX.setValue(0);
              animatedValueY.setValue(0);
              animation();          
            }
          });
        };
        animation(setTimeout(()=>{
            setCardDisplay('flex');
        },1500)); // Start the first animation iteration        
    }
    const seeCards = () =>
    {
        if(allPlayersCards.length>0)
        {
            console.log(allPlayersCards[0][1][0]);
            console.log(allPlayersCards[0][1][1]);
            console.log(allPlayersCards[0][1][2]);
            setPlayer1(CardsImgUrl[allPlayersCards[0][1][0]]);
            setPlayer2(CardsImgUrl[allPlayersCards[0][1][1]]);
            setPlayer3(CardsImgUrl[allPlayersCards[0][1][2]]);
        }
    }
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

                <View style={styles.OponentPlayers}>
                    <View>
                        <View style={{flexDirection:'row',height:30}}>
                            <Image source={player11} resizeMode='contain' style={{width:20,height:30,display:cardDisplay}}/>
                            <Image source={player12} resizeMode='contain' style={{width:20,height:30,left:-10,display:cardDisplay}}/>
                            <Image source={player13} resizeMode='contain' style={{width:20,height:30,left:-20,display:cardDisplay}}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Image source={randomPlayers[fourNum[0]][2]} resizeMode='contain' style={{ height: 50, width: 50,borderRadius:5}}/>
                            <View style={{backgroundColor:'white',width:70,paddingLeft:5}}>
                                <Text>{randomPlayers[fourNum[0]][0].slice(0,5)}..</Text>
                                <Text>{randomPlayers[fourNum[0]][1]}</Text>
                                <Text>Seen</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',left:20,height:30}}>
                            <Image source={player21} resizeMode='contain' style={{width:20,height:30,display:cardDisplay}}/>
                            <Image source={player22} resizeMode='contain' style={{width:20,height:30,left:-10,display:cardDisplay}}/>
                            <Image source={player23} resizeMode='contain' style={{width:20,height:30,left:-20,display:cardDisplay}}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'white',width:70,paddingLeft:5}}>
                                <Text>{randomPlayers[fourNum[1]][0].slice(0,5)}..</Text>
                                <Text>{randomPlayers[fourNum[1]][1]}</Text>
                                <Text>Seen</Text>
                            </View>
                            <Image source={randomPlayers[fourNum[1]][2]} resizeMode='contain' style={{ height: 50, width: 50,borderRadius:5}}/>
                        </View>
                    </View>
                </View>

                <View style={{alignItems:'center'}}>
                    <Animated.Image source={require('../../images/cards/cardBack.png')}
                    resizeMode='contain'
                    style={{ height: 40,width:27, borderRadius:5,position:'absolute',
                        transform: [
                            { translateX: animatedValueX },
                            { translateY: animatedValueY },
                    ]}}/>
                    <Image source={require('../../images/cards/cardBack.png')}
                    resizeMode='contain'
                    style={{ height: 40,width:27, borderRadius:5}}
                    />
                </View>


                <View style={{marginTop:50,flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <View style={{flexDirection:'row',height:30}}>
                            <Image source={player31} resizeMode='contain' style={{width:20,height:30,display:cardDisplay}}/>
                            <Image source={player32} resizeMode='contain' style={{width:20,height:30,left:-10,display:cardDisplay}}/>
                            <Image source={player33} resizeMode='contain' style={{width:20,height:30,left:-20,display:cardDisplay}}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={randomPlayers[fourNum[2]][2]} resizeMode='contain' style={{ height: 50, width: 50,borderRadius:5}}/>
                            <View style={{backgroundColor:'white',width:70,paddingLeft:5}}>
                                <Text>{randomPlayers[fourNum[2]][0].slice(0,5)}..</Text>
                                <Text>{randomPlayers[fourNum[2]][1]}</Text>
                                <Text>Seen</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',left:20,height:30}}>
                            <Image source={player41} resizeMode='contain' style={{width:20,height:30,display:cardDisplay}}/>
                            <Image source={player42} resizeMode='contain' style={{width:20,height:30,left:-10,display:cardDisplay}}/>
                            <Image source={player43} resizeMode='contain' style={{width:20,height:30,left:-20,display:cardDisplay}}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'white',width:70,paddingLeft:5}}>
                                <Text>{randomPlayers[fourNum[3]][0].slice(0,5)}..</Text>
                                <Text>{randomPlayers[fourNum[3]][1]}</Text>
                                <Text>Seen</Text>
                            </View>
                            <Image source={randomPlayers[fourNum[3]][2]} resizeMode='contain' style={{ height: 50, width: 50,borderRadius:5}}/>
                        </View>
                    </View>
                </View>

            <View style={[styles.row,{backgroundColor:'rgba(255,255,255,0.5)',padding:5,marginTop:40}]}>
                <Image source={require('../../images/player.png')} resizeMode='contain' style={{marginRight:10, height: 60, width: 60,borderRadius:5}} />
                <View style={{flexDirection:'row'}}>
                    <Image source={player1} resizeMode='contain' style={{width:30,height:60,display:cardDisplay}}/>
                    <Image source={player2} resizeMode='contain' style={{width:30,height:60,left:-10,display:cardDisplay}}/>
                    <Image source={player3} resizeMode='contain' style={{width:30,height:60,left:-20,display:cardDisplay}}/>
                </View>
                <View>
                    <Text>Amount : 100</Text>
                    <TouchableOpacity style={{borderRadius:5,backgroundColor:'blue'}} onPress={seeCards}>
                        <Text style={{color:'white',padding:10}}>See cards</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.allbtn,{marginRight:10}]}>
                        <Text style={styles.allbtntxt}>Pack</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.allbtn}>
                        <Text style={styles.allbtntxt}>Side show</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row,{marginTop:10}]}>
                    <View style={[styles.row,{marginRight:10,alignItems:'center'}]}>
                        <TouchableOpacity style={styles.AddSub} onPress={()=>setChaalAmount(chaalAmount-2)}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text style={[styles.allbtntxt,{paddingHorizontal:15}]}>{chaalAmount}</Text>
                        <TouchableOpacity style={styles.AddSub} onPress={()=>setChaalAmount(chaalAmount+2)}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.allbtn}>
                        <Text style={styles.allbtntxt}>Blind</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    btnContainer:{
        marginTop:10
    },
    row:{
        flexDirection:'row',
        justifyContent:'center'
    },
    allbtn:{
        borderRadius:10,
        padding:15,
        backgroundColor:'green',
    },
    allbtntxt:{
        color:'white',
        fontSize:20
    },
    AddSub:{
        backgroundColor:'red',
        padding:10,
        borderRadius:5
    },
    OponentPlayers:{
        marginTop:50,
        marginBottom:50,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30
    }
});