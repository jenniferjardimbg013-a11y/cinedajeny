import { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Speech from 'expo-speech';

export default function Perfil() {
  const [texto, setTexto] = useState('');
  const [foto, setFoto] = useState(null);

  const escolherFoto = async () => {
    const permissao =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert(
        'Permissão necessária',
        'Permita o acesso às suas fotos para escolher uma imagem.'
      );
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  };

  const falar = () => {
    if (texto.trim() === '') {
      Alert.alert('Digite algo antes de ouvir!');
      return;
    }

    Speech.speak(texto, {
      language: 'pt-BR',
      pitch: 1.0,
      rate: 0.85
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollConteudo}
      >
        <View style={styles.card}>

          {/* FOTO DA JOGADORA */}
          <Image
            source={
              foto
                ? { uri: foto }
                : require('./assets/icon.png')
            }
            style={styles.avatar}
          />

          <TouchableOpacity
            style={styles.botaoFoto}
            onPress={escolherFoto}
          >
            <Text style={styles.textoBotaoFoto}>
              {foto ? 'Trocar minha foto' : 'Escolher minha foto'}
            </Text>
          </TouchableOpacity>

          {/* TÍTULO */}
          <Text style={styles.titulo}>
            Perfil da jogadora
          </Text>

          <View style={styles.linha} />

          {/* NOME */}
          <Text style={styles.label}>
            Jogadora
          </Text>

          <Text style={styles.valor}>
            Jennifer Giovana Lopes
          </Text>

          {/* TURMA */}
          <Text style={styles.label}>
            Turma
          </Text>

          <Text style={styles.valor}>
            6 Info
          </Text>

          {/* RA */}
          <Text style={styles.label}>
            RA
          </Text>

          <Text style={styles.valor}>
            2023BG.INF_10013
          </Text>

          {/* DISCIPLINA */}
          <Text style={styles.label}>
            Disciplina
          </Text>

          <Text style={styles.valor}>
            Dispositivos Móveis
          </Text>

          {/* TEMA */}
          <Text style={styles.label}>
            Tema do aplicativo
          </Text>

          <Text style={styles.valor}>
            PlayStation da Giovana
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>
              PERFIL DA JOGADORA
            </Text>
          </View>

          {/* SOBRE O APLICATIVO */}
          <View style={styles.explicacao}>
            <Text style={styles.explicacaoTitulo}>
              Sobre o aplicativo
            </Text>

            <Text style={styles.explicacaoTexto}>
              O PlayStation da Giovana é um catálogo de jogos
              desenvolvido para apresentar informações sobre
              diferentes jogos de PlayStation de forma organizada
              e fácil de navegar.
            </Text>

            <Text style={styles.explicacaoTexto}>
              O aplicativo permite pesquisar jogos, visualizar
              imagens, conhecer o ano, gênero e plataforma,
              ler descrições e acessar as páginas oficiais dos jogos.
            </Text>

            <Text style={styles.explicacaoTexto}>
              O projeto também possui leitura por voz para
              facilitar a acessibilidade durante a navegação.
            </Text>
          </View>

          {/* LEITURA POR VOZ */}
          <Text style={styles.label}>
            Leitura por voz
          </Text>

          <TextInput
            placeholder="Digite um texto para ouvir..."
            value={texto}
            onChangeText={setTexto}
            style={styles.input}
            placeholderTextColor="#91A3A8"
            multiline
          />

          <TouchableOpacity
            style={styles.botaoOuvir}
            onPress={falar}
          >
            <Text style={styles.textoBotaoOuvir}>
              🔊 Ouvir texto
            </Text>
          </TouchableOpacity>

          {/* RODAPÉ */}
          <View style={styles.rodape}>
            <Text style={styles.rodapeTexto}>
              PLAYSTATION DA GIOVANA
            </Text>

            <Text style={styles.versao}>
              Versão 1.0.0
            </Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820'
  },

  scrollConteudo: {
    padding: 18,
    paddingBottom: 40
  },

  card: {
    backgroundColor: '#18252C',
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: '#2F434F',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 8
    },
    elevation: 10,
    borderTopWidth: 3,
    borderTopColor: '#F2C14E'
  },

  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 18,
    borderWidth: 4,
    borderColor: '#F2C14E',
    backgroundColor: '#1F2D38',
    resizeMode: 'cover'
  },

  botaoFoto: {
    alignSelf: 'center',
    backgroundColor: '#18A0FB',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#55BCFF'
  },

  textoBotaoFoto: {
    color: '#F4F1DE',
    fontSize: 13,
    fontWeight: '800'
  },

  titulo: {
    color: '#F2C14E',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 18,
    letterSpacing: 0.5
  },

  linha: {
    height: 1,
    backgroundColor: '#2F434F',
    marginBottom: 6
  },

  label: {
    color: '#91A3A8',
    fontSize: 11,
    marginTop: 16,
    textTransform: 'uppercase',
    letterSpacing: 1.2
  },

  valor: {
    color: '#F4F1DE',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 5,
    lineHeight: 23
  },

  badge: {
    marginTop: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: '#F2C14E',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E6B947'
  },

  badgeTexto: {
    color: '#101820',
    fontSize: 11,
    fontWeight: '900',
    textAlign: 'center'
  },

  explicacao: {
    backgroundColor: '#101820',
    borderRadius: 16,
    padding: 18,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#2F434F'
  },

  explicacaoTitulo: {
    color: '#F2C14E',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 12
  },

  explicacaoTexto: {
    color: '#C8D1D3',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12
  },

  input: {
    backgroundColor: '#101820',
    color: '#F4F1DE',
    borderWidth: 1,
    borderColor: '#2F434F',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginTop: 10,
    marginBottom: 12,
    fontSize: 15,
    minHeight: 80,
    textAlignVertical: 'top'
  },

  botaoOuvir: {
    backgroundColor: '#F2C14E',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6B947'
  },

  textoBotaoOuvir: {
    color: '#101820',
    fontSize: 16,
    fontWeight: '900'
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: '#2F434F'
  },

  rodapeTexto: {
    color: '#91A3A8',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1
  },

  versao: {
    color: '#F2C14E',
    fontSize: 12,
    fontWeight: '700'
  }
});