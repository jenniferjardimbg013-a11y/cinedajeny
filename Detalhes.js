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
      <View style={styles.card}>
        <Image source={{ uri: filmes.imagem }} style={styles.imagem} />

        <Text style={styles.titulo}>{filmes.nome}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.informacao}>Ano: {filmes.ano}</Text>
          <Text style={styles.informacao}>Gênero: {filmes.genero}</Text>
          <Text style={styles.informacao}>Plataforma: {filmes.plataforma}</Text>
        </View>

        <Text style={styles.sinopse}>{filmes.sinopse}</Text>

        <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(filmes.url)}>
          <Text style={styles.textoBotao}>Abrir página do jogo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#101820'
  },
  card: {
    flex: 1,
    backgroundColor: '#1A2730',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2B3B43',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6
  },
  imagem: {
    width: '100%',
    height: 310,
    borderRadius: 16,
    marginBottom: 18,
    resizeMode: 'cover'
  },
  titulo: {
    color: '#F4F1DE',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 14
  },
  infoBox: {
    backgroundColor: '#121F27',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2B3B43'
  },
  informacao: {
    color: '#D9E2E5',
    fontSize: 16,
    marginBottom: 6
  },
  sinopse: {
    color: '#E8EEF0',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginTop: 8,
    marginBottom: 20
  },
  botao: {
    backgroundColor: '#F2C14E',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12
  },
  botaoVoltar: {
    backgroundColor: '#344954',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center'
  },
  textoBotao: {
    color: '#101820',
    fontWeight: '800',
    fontSize: 16
  }
});