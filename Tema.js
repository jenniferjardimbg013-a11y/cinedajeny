import { StyleSheet, Text, View } from 'react-native';

export default function Tema() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o tema</Text>
      <Text style={styles.texto}>
        O PlayStation da Jeny reúne jogos de ação, aventura, corrida, RPG e luta
        em uma lista fácil de explorar.
      </Text>
      <Text style={styles.texto}>
        Cada jogo possui imagem, plataforma, descrição e um link para sua página
        oficial. Ao tocar em um item, o aplicativo também lê o título e a
        descrição em voz alta usando o recurso nativo de voz.
      </Text>
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
  texto: {
    color: '#F4F1DE',
    fontSize: 17,
    lineHeight: 27,
    marginBottom: 20
  }
});
