import { StyleSheet, Text, View } from 'react-native';

export default function Tema() {
  return (
    <View style={styles.container}>
      <Text style={styles.kicker}>PLAYSTATION DA GIOVANA</Text>
      <Text style={styles.titulo}>Informações</Text>
      <Text style={styles.introducao}>
        Um catálogo feito para descobrir jogos, conhecer seus detalhes e acessar
        rapidamente as páginas oficiais.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>O que você encontra</Text>
        <Text style={styles.texto}>
          Jogos de ação, aventura, corrida, RPG e luta organizados em uma lista
          simples de explorar.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Acessibilidade</Text>
        <Text style={styles.texto}>
          Cada jogo tem imagem, plataforma, descrição e leitura por voz para
          facilitar a navegação.
        </Text>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>CATÁLOGO DE JOGOS</Text>
        <Text style={styles.versao}>Versão 1.0.0</Text>
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
  kicker: {
    color: '#F2C14E',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.6,
    marginTop: 18
  },
  titulo: {
    color: '#F2C14E',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 7,
    marginBottom: 12
  },
  introducao: {
    color: '#D9E2E5',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24
  },
  card: {
    backgroundColor: '#18252C',
    borderWidth: 1,
    borderColor: '#2F434F',
    borderLeftWidth: 3,
    borderLeftColor: '#F2C14E',
    borderRadius: 14,
    padding: 18,
    marginBottom: 14
  },
  cardTitulo: {
    color: '#F4F1DE',
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 8
  },
  texto: {
    color: '#B9C7CA',
    fontSize: 15,
    lineHeight: 23
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#2F434F'
  },
  rodapeTexto: {
    color: '#91A3A8',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1
  },
  versao: {
    color: '#F2C14E',
    fontSize: 12,
    fontWeight: '700'
  }
});
