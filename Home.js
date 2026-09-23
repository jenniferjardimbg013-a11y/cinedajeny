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
        headerStyle: { backgroundColor: '#121F27', borderBottomWidth: 1, borderBottomColor: '#2F434F' },
        headerTintColor: '#F4F1DE',
        headerTitleStyle: { fontWeight: '800', color: '#F4F1DE' },
        drawerStyle: { backgroundColor: '#18252C', width: 280 },
        drawerActiveTintColor: '#F2C14E',
        drawerInactiveTintColor: '#F4F1DE',
        drawerLabelStyle: { fontSize: 15, fontWeight: '700' },
        drawerItemStyle: { borderRadius: 12, marginHorizontal: 8, marginVertical: 4 },
        drawerActiveBackgroundColor: '#1F2D38'
      }}
    >
      <Drawer.Screen name="Lista de jogos" component={CatalogoStack} />
      <Drawer.Screen name="Informações do tema" component={Tema} />
    </Drawer.Navigator>
  );
}