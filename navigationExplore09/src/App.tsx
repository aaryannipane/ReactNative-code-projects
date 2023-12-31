
import React from 'react';


// navigation 
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined,
  Details: { productId: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Product Details"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
