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
  const { jogo } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={typeof jogo.imagem === 'string' ? { uri: jogo.imagem } : jogo.imagem}
          style={styles.imagem}
        />

        <Text style={styles.kicker}>BEM-VINDA AO MUNDO DOS JOGOS</Text>
        <Text style={styles.titulo}>{jogo.nome}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.informacao}>Ano: {jogo.ano}</Text>
          <Text style={styles.informacao}>Gênero: {jogo.genero}</Text>
          <Text style={styles.informacao}>Plataforma: {jogo.plataforma}</Text>
        </View>

        <Text style={styles.sinopse}>{jogo.sinopse}</Text>

        <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(jogo.url)}>
          <Text style={styles.textoBotao}>Abrir página do jogo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>Sair dos detalhes</Text>
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
  kicker: {
    color: '#F2C14E',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.5,
    textAlign: 'center',
    marginBottom: 7
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
    backgroundColor: '#18A0FB',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#55BCFF'
  },
  botaoVoltar: {
    backgroundColor: '#273A52',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3F5C7D'
  },
  textoBotao: {
    color: '#F4F1DE',
    fontWeight: '800',
    fontSize: 16
  }
});