import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Perfil from './Perfil';
import Configuracoes from './Configuracoes';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#F2C14E',
          tabBarInactiveTintColor: '#91A3A8',
          tabBarStyle: { backgroundColor: '#18252C' }
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{ title: 'Início' }}
        />
        <Tabs.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: 'Perfil da jogadora' }}
        />
        <Tabs.Screen
          name="Configuracoes"
          component={Configuracoes}
          options={{ title: 'Configurações' }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}


