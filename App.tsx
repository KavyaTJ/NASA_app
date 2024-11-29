import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home  from './src/Home';
import Details from './src/Details';
import RandomAsteroid from './src/RandomAsteroid'




const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={Home}  />
                <Stack.Screen name='About Astroid' component={Details}/>
                <Stack.Screen name='RandomAsteroid' component={RandomAsteroid} options={{title:"About Astroid"}}/>
            </Stack.Navigator>
        
           
        </NavigationContainer>
    );
}

export default App;