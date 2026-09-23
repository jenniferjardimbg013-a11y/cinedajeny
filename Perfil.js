import { Image, StyleSheet, Text, View } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.avatar} />
      <Text style={styles.titulo}>Apresentação</Text>
      <Text style={styles.label}>Nome completo</Text>
      <Text style={styles.valor}>Jeny</Text>
      <Text style={styles.label}>RA</Text>
      <Text style={styles.valor}>Informe seu RA</Text>
      <Text style={styles.label}>Disciplina</Text>
      <Text style={styles.valor}>Desenvolvimento Mobile</Text>
      <Text style={styles.texto}>
        O PlayStation da Jeny é um catálogo de jogos com imagens, descrições,
        links e leitura por voz para tornar a experiência mais acessível.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#101820'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 35,
    marginBottom: 20
  },
  titulo: {
    color: '#F2C14E',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 24
  },
  label: {
    color: '#91A3A8',
    fontSize: 13,
    marginTop: 12
  },
  valor: {
    color: '#F4F1DE',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 3
  },
  texto: {
    color: '#C8D1D3',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 30
  }
});
