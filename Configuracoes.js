import { StyleSheet, Text, View } from 'react-native';

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <View style={styles.item}>
        <Text style={styles.nome}>Versão do aplicativo</Text>
        <Text style={styles.valor}>1.0.0</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.nome}>Leitura por voz</Text>
        <Text style={styles.valor}>Ativa nos jogos</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.nome}>Tema</Text>
        <Text style={styles.valor}>PlayStation da Jeny</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820',
    padding: 24
  },
  titulo: {
    color: '#F2C14E',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 35,
    marginBottom: 25
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#31434B',
    paddingVertical: 18
  },
  nome: {
    color: '#F4F1DE',
    fontSize: 16,
    fontWeight: '700'
  },
  valor: {
    color: '#91A3A8',
    fontSize: 14,
    marginTop: 5
  }
});
