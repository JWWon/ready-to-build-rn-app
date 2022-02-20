import React from 'react';
import Cities from '@routers/Cities';
import { NavigationContainer } from '@react-navigation/native';
import Provider from '@utils/Provider';

const App = () => (
  <Provider>
    <NavigationContainer>
      <Cities />
    </NavigationContainer>
  </Provider>
);

export default App;
