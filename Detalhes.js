import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';


export default function Detalhes({ route, navigation }) {


  const { filmes } = route.params;


  return (

    <View style={styles.container}>


      <Image
        source={filmes.imagem}
        style={styles.imagem}
      />


      <Text style={styles.titulo}>
        {filmes.nome}
      </Text>


      <Text style={styles.informacao}>
        Ano: {filmes.ano}
      </Text>


      <Text style={styles.informacao}>
        Gênero: {filmes.genero}
      </Text>

      <Text style={styles.informacao}>
        Plataforma: {filmes.plataforma}
      </Text>


      <Text style={styles.sinopse}>
        {filmes.sinopse}
      </Text>


      {/* Abre o trailer no YouTube */}

      <TouchableOpacity

        style={styles.botao}

        onPress={() => Linking.openURL(filmes.url)}

      >

        <Text style={styles.textoBotao}>
          Abrir página do jogo
        </Text>

      </TouchableOpacity>


      {/* Volta para a tela anterior */}

      <TouchableOpacity

        style={styles.botaoVoltar}

        onPress={() => navigation.goBack()}

      >

        <Text style={styles.textoBotao}>
          Voltar
        </Text>

      </TouchableOpacity>


    </View>

  );

}


const styles = StyleSheet.create({

  container: {

    flex: 1,

    alignItems: 'center',

    padding: 25,

    backgroundColor: '#f5f5f5'

  },


  imagem: {

    width: 200,

    height: 300,

    borderRadius: 10,

    marginBottom: 20

  },


  titulo: {

    fontSize: 26,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 10

  },


  informacao: {

    fontSize: 17,

    marginBottom: 5

  },


  sinopse: {

    fontSize: 16,

    textAlign: 'justify',

    marginTop: 15,

    marginBottom: 25

  },


  botao: {

    backgroundColor: '#673ab7',

    width: '100%',

    padding: 15,

    borderRadius: 10,

    alignItems: 'center',

    marginBottom: 10

  },


  botaoVoltar: {

    backgroundColor: '#555',

    width: '100%',

    padding: 15,

    borderRadius: 10,

    alignItems: 'center'

  },


  textoBotao: {

    color: '#fff',

    fontWeight: 'bold',

    fontSize: 16

  }

});