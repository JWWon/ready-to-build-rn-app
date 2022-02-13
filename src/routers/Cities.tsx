import Home from '@pages/Home';
import London from '@pages/London';
import NewYork from '@pages/MountainView';
import Seoul from '@pages/Seoul';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export type CitiesStackParams = {
  Home: undefined;
  Seoul: undefined;
  London: undefined;
  MountainView: undefined;
};

const Cities: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Seoul" component={Seoul} />
    <Stack.Screen name="London" component={London} />
    <Stack.Screen name="MountainView" component={NewYork} />
  </Stack.Navigator>
);

export default Cities;
