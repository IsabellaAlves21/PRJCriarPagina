import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import iOS from './iOS';
import Android from './Android';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/*Define a página inicial (HomeScreen)*/}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Define a rota para Page1 */}
         <Stack.Screen name="iOS" component={iOS} />
         {/* Define a rota para Page2 */}
         <Stack.Screen name="Android" component={Android} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;