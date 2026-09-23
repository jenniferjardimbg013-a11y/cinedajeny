import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Lista from './Lista';
import Detalhes from './Detalhes';
import Tema from './Tema';

const Drawer = createDrawerNavigator();
const Catalogo = createNativeStackNavigator();

function CatalogoStack() {
  return (
    <Catalogo.Navigator>
      <Catalogo.Screen name="Lista" component={Lista} options={{ title: 'Jogos PlayStation' }} />
      <Catalogo.Screen name="Detalhes" component={Detalhes} options={{ title: 'Detalhes do jogo' }} />
    </Catalogo.Navigator>
  );
}

export default function Home() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#18252C' },
        headerTintColor: '#F4F1DE',
        drawerStyle: { backgroundColor: '#18252C' },
        drawerActiveTintColor: '#F2C14E',
        drawerInactiveTintColor: '#F4F1DE'
      }}
    >
      <Drawer.Screen name="Lista de jogos" component={CatalogoStack} />
      <Drawer.Screen name="Informações do tema" component={Tema} />
    </Drawer.Navigator>
  );
}