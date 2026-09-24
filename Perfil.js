import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Speech from 'expo-speech';

export default function Perfil() {
  const [texto, setTexto] = useState('');
  const [foto, setFoto] = useState(null);

  const escolherFoto = async () => {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert('Permissão necessária', 'Permita o acesso às suas fotos para escolher uma imagem.');
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
      pitch: 1.2,
      rate: 1.0,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={foto ? { uri: foto } : require('./assets/icon.png')}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.botaoFoto} onPress={escolherFoto}>
          <Text style={styles.textoBotaoFoto}>{foto ? 'Trocar minha foto' : 'Escolher minha foto'}</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Perfil da jogadora</Text>

        <Text style={styles.label}>Jogadora</Text>
        <Text style={styles.valor}>Jennifer Giovana Lopes</Text>

        <Text style={styles.label}>ID da jogadora</Text>
        <Text style={styles.valor}>Informe seu RA</Text>

        <Text style={styles.label}>Modo de jogo</Text>
        <Text style={styles.valor}>Dispositivos Móveis</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>PERFIL DA GIOVANA</Text>
        </View>

        <TextInput
          placeholder="Digite um texto para ouvir..."
          value={texto}
          onChangeText={setTexto}
          style={styles.input}
          placeholderTextColor="#91A3A8"
        />

        <View style={styles.areaBotao}>
          <Button title="Ouvir texto" onPress={falar} color="#F2C14E" />
        </View>

        <Text style={styles.texto}>
          O PlayStation da Giovana é um catálogo de jogos com imagens, descrições,
          links e leitura por voz para deixar a experiência mais acessível.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#101820'
  },
  card: {
    flex: 1,
    backgroundColor: '#18252C',
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: '#2F434F',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
    borderTopWidth: 3,
    borderTopColor: '#F2C14E'
  },
  avatar: {
    width: 118,
    height: 118,
    borderRadius: 59,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 18,
    borderWidth: 3,
    borderColor: '#F2C14E',
    backgroundColor: '#1F2D38'
  },
  botaoFoto: {
    alignSelf: 'center',
    backgroundColor: '#18A0FB',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginBottom: 16,
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
  label: {
    color: '#91A3A8',
    fontSize: 11,
    marginTop: 14,
    textTransform: 'uppercase',
    letterSpacing: 1.2
  },
  valor: {
    color: '#F4F1DE',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 4
  },
  badge: {
    marginTop: 22,
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
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#101820',
    color: '#F4F1DE',
    borderWidth: 1,
    borderColor: '#2F434F',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginTop: 22,
    marginBottom: 14,
    fontSize: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 }
  },
  areaBotao: {
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 6
  },
  texto: {
    color: '#C8D1D3',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 20
  }
});
