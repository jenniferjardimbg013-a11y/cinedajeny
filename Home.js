import { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import Lista from './Lista';
import Detalhes from './Detalhes';
import Tema from './Tema';

const Drawer = createDrawerNavigator();
const Catalogo = createNativeStackNavigator();



function CatalogoStack({
  favoritos,
  alternarFavorito,
  filtroTipo,
  filtroValor
}) {
  return (
    <Catalogo.Navigator>
      <Catalogo.Screen
        name="Lista"
        options={{
          title: filtroValor
            ? filtroValor
            : 'Jogos PlayStation'
        }}
      >
        {(props) => (
          <Lista
            {...props}
            favoritos={favoritos}
            alternarFavorito={alternarFavorito}
            filtroTipo={filtroTipo}
            filtroValor={filtroValor}
          />
        )}
      </Catalogo.Screen>

      <Catalogo.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          title: 'Detalhes do jogo'
        }}
      />
    </Catalogo.Navigator>
  );
}

/* =========================
   CATEGORIAS
========================= */

function Categorias({ navigation }) {
  const categorias = [
    'Ação',
    'Ação e aventura',
    'Aventura',
    'Corrida',
    'RPG',
    'RPG de ação',
    'Luta',
    'Investigação',
    'Investigação e ação',
    'Tiro',
    'Tiro e ação',
    'Tiro e ficção científica',
    'Luta e esporte',
    'Aventura e romance'
  ];

  const escolherCategoria = (categoria) => {
    navigation.navigate('Lista de jogos', {
      filtroTipo: 'categoria',
      filtroValor: categoria
    });
  };

  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={styles.conteudo}
    >
      <Text style={styles.kicker}>
        PLAYSTATION DA GIOVANA
      </Text>

      <Text style={styles.titulo}>
        Categorias
      </Text>

      <Text style={styles.descricao}>
        Escolha uma categoria para ver os jogos desse gênero.
      </Text>

      {categorias.map((categoria) => (
        <TouchableOpacity
          key={categoria}
          style={styles.opcao}
          activeOpacity={0.8}
          onPress={() => escolherCategoria(categoria)}
        >
          <Text style={styles.icone}>
            🎮
          </Text>

          <Text style={styles.textoOpcao}>
            {categoria}
          </Text>

          <Text style={styles.seta}>
            ›
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

/* =========================
   PLATAFORMAS
========================= */

function Plataformas({ navigation }) {
  const escolherPlataforma = (plataforma) => {
    navigation.navigate('Lista de jogos', {
      filtroTipo: 'plataforma',
      filtroValor: plataforma
    });
  };

  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={styles.conteudo}
    >
      <Text style={styles.kicker}>
        PLAYSTATION DA GIOVANA
      </Text>

      <Text style={styles.titulo}>
        Plataformas
      </Text>

      <Text style={styles.descricao}>
        Escolha uma plataforma para ver os jogos disponíveis.
      </Text>

      <TouchableOpacity
        style={styles.opcao}
        activeOpacity={0.8}
        onPress={() =>
          escolherPlataforma('PlayStation 4')
        }
      >
        <Text style={styles.icone}>
          🎮
        </Text>

        <View style={styles.textoArea}>
          <Text style={styles.textoOpcao}>
            PlayStation 4
          </Text>

          <Text style={styles.subTexto}>
            Jogos disponíveis para PS4
          </Text>
        </View>

        <Text style={styles.seta}>
          ›
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.opcao}
        activeOpacity={0.8}
        onPress={() =>
          escolherPlataforma('PlayStation 5')
        }
      >
        <Text style={styles.icone}>
          🎮
        </Text>

        <View style={styles.textoArea}>
          <Text style={styles.textoOpcao}>
            PlayStation 5
          </Text>

          <Text style={styles.subTexto}>
            Jogos disponíveis para PS5
          </Text>
        </View>

        <Text style={styles.seta}>
          ›
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* =========================
   FAVORITOS
========================= */

function Favoritos({
  favoritos,
  alternarFavorito,
  navigation
}) {
  return (
    <View style={styles.tela}>
      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.kicker}>
          PLAYSTATION DA GIOVANA
        </Text>

        <Text style={styles.titulo}>
          Meus favoritos
        </Text>

        <Text style={styles.descricao}>
          Aqui aparecem os jogos que você marcou como favoritos.
        </Text>

        {favoritos.length === 0 ? (
          <View style={styles.favoritoVazio}>
            <Text style={styles.iconeGrande}>
              ⭐
            </Text>

            <Text style={styles.tituloCentral}>
              Nenhum favorito ainda
            </Text>

            <Text style={styles.descricaoCentral}>
              Vá até a Lista de jogos e toque na estrela
              para adicionar um jogo aos seus favoritos.
            </Text>
          </View>
        ) : (
          favoritos.map((jogo) => (
            <View
              key={jogo.id}
              style={styles.cardFavorito}
            >
              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.areaFavorito}
                onPress={() =>
                  navigation.navigate('Lista de jogos', {
                    tela: 'Detalhes',
                    jogo
                  })
                }
              >
                <Image
                  source={
                    typeof jogo.imagem === 'string'
                      ? { uri: jogo.imagem }
                      : jogo.imagem
                  }
                  style={styles.imagemFavorito}
                />

                <View style={styles.infoFavorito}>
                  <Text style={styles.nomeFavorito}>
                    {jogo.nome}
                  </Text>

                  <Text style={styles.metaFavorito}>
                    {jogo.ano} • {jogo.genero}
                  </Text>

                  <Text style={styles.plataformaFavorito}>
                    {jogo.plataforma}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoRemover}
                onPress={() =>
                  alternarFavorito(jogo)
                }
              >
                <Text style={styles.textoRemover}>
                  ★ Remover dos favoritos
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

/* =========================
   SOBRE
========================= */

function Sobre() {
  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={styles.conteudo}
    >
      <Text style={styles.kicker}>
        PLAYSTATION DA GIOVANA
      </Text>

      <Text style={styles.titulo}>
        Sobre o aplicativo
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          🎮 Catálogo de jogos
        </Text>

        <Text style={styles.cardTexto}>
          Este aplicativo reúne jogos de PlayStation em um
          catálogo organizado e fácil de navegar.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          ⭐ Favoritos
        </Text>

        <Text style={styles.cardTexto}>
          O usuário pode escolher seus jogos favoritos e
          visualizar todos eles na área Meus favoritos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          🔎 Pesquisa
        </Text>

        <Text style={styles.cardTexto}>
          Você pode pesquisar jogos pelo nome e acessar seus detalhes.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          🎯 Categorias
        </Text>

        <Text style={styles.cardTexto}>
          Os jogos podem ser filtrados por ação, aventura,
          corrida, RPG, luta, investigação, tiro e outras categorias.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          🕹️ Plataformas
        </Text>

        <Text style={styles.cardTexto}>
          O catálogo permite visualizar jogos de PlayStation 4
          e PlayStation 5.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          🔊 Acessibilidade
        </Text>

        <Text style={styles.cardTexto}>
          Os jogos possuem leitura por voz para ajudar na navegação.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          📱 Versão
        </Text>

        <Text style={styles.cardTexto}>
          PlayStation da Giovana — versão 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
}

/* =========================
   HOME
========================= */

export default function Home() {
  const [favoritos, setFavoritos] = useState([]);

  const alternarFavorito = (jogo) => {
    setFavoritos((atual) => {
      const jaExiste = atual.some(
        (item) => item.id === jogo.id
      );

      if (jaExiste) {
        return atual.filter(
          (item) => item.id !== jogo.id
        );
      }

      return [...atual, jogo];
    });
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121F27',
          borderBottomWidth: 1,
          borderBottomColor: '#2F434F'
        },

        headerTintColor: '#F4F1DE',

        headerTitleStyle: {
          fontWeight: '800',
          color: '#F4F1DE'
        },

        drawerStyle: {
          backgroundColor: '#18252C',
          width: 285
        },

        drawerActiveTintColor: '#F2C14E',

        drawerInactiveTintColor: '#F4F1DE',

        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: '700'
        },

        drawerItemStyle: {
          borderRadius: 12,
          marginHorizontal: 8,
          marginVertical: 4
        },

        drawerActiveBackgroundColor: '#1F2D38'
      }}
    >

      <Drawer.Screen
        name="Lista de jogos"
        options={{
          title: '🎮  Lista de jogos'
        }}
      >
        {(props) => {
          const filtroTipo =
            props.route.params?.filtroTipo ?? null;

          const filtroValor =
            props.route.params?.filtroValor ?? null;

          return (
            <CatalogoStack
              favoritos={favoritos}
              alternarFavorito={alternarFavorito}
              filtroTipo={filtroTipo}
              filtroValor={filtroValor}
            />
          );
        }}
      </Drawer.Screen>

      <Drawer.Screen
        name="Favoritos"
        options={{
          title: '⭐  Meus favoritos'
        }}
      >
        {(props) => (
          <Favoritos
            {...props}
            favoritos={favoritos}
            alternarFavorito={alternarFavorito}
          />
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Categorias"
        component={Categorias}
        options={{
          title: '🎯  Categorias'
        }}
      />

      <Drawer.Screen
        name="Plataformas"
        component={Plataformas}
        options={{
          title: '🕹️  Plataformas'
        }}
      />

      <Drawer.Screen
        name="Informações do tema"
        component={Tema}
        options={{
          title: 'ℹ️  Informações do tema'
        }}
      />

      <Drawer.Screen
        name="Sobre o aplicativo"
        component={Sobre}
        options={{
          title: '📱  Sobre o aplicativo'
        }}
      />

    </Drawer.Navigator>
  );
}

/* =========================
   ESTILOS
========================= */

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#101820'
  },

  conteudo: {
    padding: 22,
    paddingBottom: 40
  },

  kicker: {
    color: '#F2C14E',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginTop: 12,
    marginBottom: 7
  },

  titulo: {
    color: '#F4F1DE',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 10
  },

  descricao: {
    color: '#A8B5B9',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 20
  },

  opcao: {
    backgroundColor: '#18252C',
    borderWidth: 1,
    borderColor: '#2F434F',
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },

  icone: {
    fontSize: 25,
    marginRight: 14
  },

  textoArea: {
    flex: 1
  },

  textoOpcao: {
    color: '#F4F1DE',
    fontSize: 16,
    fontWeight: '800'
  },

  subTexto: {
    color: '#91A3A8',
    fontSize: 13,
    marginTop: 4
  },

  seta: {
    color: '#F2C14E',
    fontSize: 28,
    fontWeight: '300'
  },

  card: {
    backgroundColor: '#18252C',
    borderWidth: 1,
    borderColor: '#2F434F',
    borderLeftWidth: 3,
    borderLeftColor: '#F2C14E',
    borderRadius: 15,
    padding: 18,
    marginBottom: 14
  },

  cardTitulo: {
    color: '#F4F1DE',
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 8
  },

  cardTexto: {
    color: '#B9C7CA',
    fontSize: 15,
    lineHeight: 23
  },

  favoritoVazio: {
    backgroundColor: '#18252C',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#2F434F',
    padding: 30,
    alignItems: 'center',
    marginTop: 10
  },

  iconeGrande: {
    fontSize: 55,
    marginBottom: 15
  },

  tituloCentral: {
    color: '#F4F1DE',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center'
  },

  descricaoCentral: {
    color: '#A8B5B9',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center'
  },

  cardFavorito: {
    backgroundColor: '#18252C',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#2F434F',
    padding: 10,
    marginBottom: 14
  },

  areaFavorito: {
    flexDirection: 'row'
  },

  imagemFavorito: {
    width: 95,
    height: 130,
    borderRadius: 12,
    backgroundColor: '#1F2A32'
  },

  infoFavorito: {
    flex: 1,
    paddingLeft: 14,
    paddingTop: 4
  },

  nomeFavorito: {
    color: '#F4F1DE',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 21
  },

  metaFavorito: {
    color: '#F2C14E',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 8
  },

  plataformaFavorito: {
    color: '#91A3A8',
    fontSize: 12,
    marginTop: 5
  },

  botaoRemover: {
    backgroundColor: '#273A52',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 12,
    alignSelf: 'flex-start'
  },

  textoRemover: {
    color: '#F4F1DE',
    fontSize: 11,
    fontWeight: '800'
  }
});
