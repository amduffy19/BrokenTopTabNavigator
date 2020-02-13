import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

const TopTab = createMaterialTopTabNavigator();

function App() {
  return (
      <NavigationContainer>
          <TopTab.Navigator
              tabBar={() => null}
          >
              <TopTab.Screen
                  name="Screen1"
                  component={Screen1}
              />
              <TopTab.Screen
                  name="Screen2"
                  component={Screen2}
              />
          </TopTab.Navigator>
      </NavigationContainer>
  );
}

export default App;
