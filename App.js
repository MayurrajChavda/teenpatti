import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import TeenPattiGameSceen from './screens/Games/TeenPattiGameSceen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='MainScreen' component={MainScreen}/>
        <Stack.Screen name='TeenPattiGameSceen' component={TeenPattiGameSceen}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App