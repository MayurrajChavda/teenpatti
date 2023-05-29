import teenpattisolver from 'teenpattisolver'
const CardNum = [
    'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS'
    , 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH',
    'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC'
    , 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD'
];

const CardsImgUrl = [
    require('../images/cards/AS.png'),
    require('../images/cards/2S.png'),
    require('../images/cards/3S.png'),
    require('../images/cards/4S.png'),
    require('../images/cards/5S.png'),
    require('../images/cards/6S.png'),
    require('../images/cards/7S.png'),
    require('../images/cards/8S.png'),
    require('../images/cards/9S.png'),
    require('../images/cards/TS.png'),
    require('../images/cards/JS.png'),
    require('../images/cards/QS.png'),
    require('../images/cards/KS.png'),
    require('../images/cards/AH.png'),
    require('../images/cards/2H.png'),
    require('../images/cards/3H.png'),
    require('../images/cards/4H.png'),
    require('../images/cards/5H.png'),
    require('../images/cards/6H.png'),
    require('../images/cards/7H.png'),
    require('../images/cards/8H.png'),
    require('../images/cards/9H.png'),
    require('../images/cards/TH.png'),
    require('../images/cards/JH.png'),
    require('../images/cards/QH.png'),
    require('../images/cards/KH.png'),
    require('../images/cards/AC.png'),
    require('../images/cards/2C.png'),
    require('../images/cards/3C.png'),
    require('../images/cards/4C.png'),
    require('../images/cards/5C.png'),
    require('../images/cards/6C.png'),
    require('../images/cards/7C.png'),
    require('../images/cards/8C.png'),
    require('../images/cards/9C.png'),
    require('../images/cards/TC.png'),
    require('../images/cards/JC.png'),
    require('../images/cards/QC.png'),
    require('../images/cards/KC.png'),
    require('../images/cards/AD.png'),
    require('../images/cards/2D.png'),
    require('../images/cards/3D.png'),
    require('../images/cards/4D.png'),
    require('../images/cards/5D.png'),
    require('../images/cards/6D.png'),
    require('../images/cards/7D.png'),
    require('../images/cards/8D.png'),
    require('../images/cards/9D.png'),
    require('../images/cards/TD.png'),
    require('../images/cards/JD.png'),
    require('../images/cards/QD.png'),
    require('../images/cards/KD.png'),
    require('../images/cards/cardBack.png'),
    ]

function SuffleCards()
{
    var arrays = [];

    for (var k = 0; k < 5; k++) {
        var arr = [];

        // Fill the array with numbers from 0 to 51
        for (var i = 0; i <= 51; i++) {
            arr.push(i);
        }

        var result = [];
        var cardIndex = [];
        // Generate random unique numbers
        for (var j = 0; j < 3; j++) {
            var randomIndex = Math.floor(Math.random() * arr.length);
            var randomNumber = arr[randomIndex];

            // Remove the selected number from the array to avoid duplicates
            arr.splice(randomIndex, 1);
            cardIndex.push(randomNumber);
            result.push(CardNum[randomNumber]);
        }
        arrays.push([result,cardIndex,teenpattisolver.scoreHandsNormal(result)]);
    }
    return arrays;
}

function generateUniqueRandomArray() {
    var randomArray = [];
    
    while (randomArray.length < 4) {
      var randomValue = Math.floor(Math.random() * 40);
      
      if (!randomArray.includes(randomValue)) {
        randomArray.push(randomValue);
      }
    }
    
    return randomArray;
  }
  
  export { SuffleCards, generateUniqueRandomArray,CardsImgUrl };


