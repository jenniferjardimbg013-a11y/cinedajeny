import * as Speech from 'expo-speech';
import { useState } from 'react';
import { FlatList, Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const jogos = [
  {
    id: 1,
    nome: 'Marvel’s Spider-Man 2',
    ano: 2023,
    genero: 'Ação',
    plataforma: 'PlayStation 5',
    imagem: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6v5f.jpg',
    url: 'https://www.playstation.com/pt-br/games/marvels-spider-man-2/',
    sinopse: 'Peter Parker e Miles Morales protegem Nova York enquanto enfrentam novos inimigos e desafios.'
  },

  {
    id: 2,
    nome: 'God of War Ragnarök',
    ano: 2022,
    genero: 'Ação e aventura',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.jpg',
    url: 'https://www.playstation.com/pt-br/games/god-of-war-ragnarok/',
    sinopse: 'Kratos e Atreus viajam pelos reinos nórdicos em busca de respostas antes do Ragnarök.'
  },

  {
    id: 3,
    nome: 'The Last of Us Part I',
    ano: 2022,
    genero: 'Ação e aventura',
    plataforma: 'PlayStation 5',
    imagem: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5x4u.jpg',
    url: 'https://www.playstation.com/pt-br/games/the-last-of-us-part-i/',
    sinopse: 'Joel precisa atravessar um mundo destruído para proteger Ellie em uma jornada emocionante.'
  },

  {
    id: 4,
    nome: 'Gran Turismo 7',
    ano: 2022,
    genero: 'Corrida',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3w2d.jpg',
    url: 'https://www.playstation.com/pt-br/games/gran-turismo-7/',
    sinopse: 'Corra em pistas famosas, personalize seus carros e viva uma experiência realista de velocidade.'
  },

  {
    id: 5,
    nome: 'Horizon Forbidden West',
    ano: 2022,
    genero: 'RPG',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4t5a.jpg',
    url: 'https://www.playstation.com/pt-br/games/horizon-forbidden-west/',
    sinopse: 'Aloy explora terras distantes e enfrenta máquinas perigosas para salvar o futuro do planeta.'
  },

  {
    id: 6,
    nome: 'Ghost of Tsushima',
    ano: 2020,
    genero: 'Ação e aventura',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2l3v.jpg',
    url: 'https://www.playstation.com/pt-br/games/ghost-of-tsushima/',
    sinopse: 'Jin Sakai luta para defender sua ilha e precisa escolher entre a tradição e novos caminhos.'
  },

  {
    id: 7,
    nome: 'Ratchet & Clank: Rift Apart',
    ano: 2021,
    genero: 'Aventura',
    plataforma: 'PlayStation 5',
    imagem: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2una.jpg',
    url: 'https://www.playstation.com/pt-br/games/ratchet-and-clank-rift-apart/',
    sinopse: 'Ratchet e Clank atravessam dimensões diferentes para impedir que um vilão destrua os mundos.'
  },

  {
    id: 8,
    nome: 'Demon’s Souls',
    ano: 2020,
    genero: 'RPG de ação',
    plataforma: 'PlayStation 5',
    imagem: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.jpg',
    url: 'https://www.playstation.com/pt-br/games/demons-souls/',
    sinopse: 'Enfrente inimigos sombrios e chefes gigantes em um reino tomado por uma névoa misteriosa.'
  },

  {
    id: 9,
    nome: 'Street Fighter 6',
    ano: 2023,
    genero: 'Luta',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/street-fighter-6/',
    sinopse: 'Escolha seu lutador, domine golpes especiais e enfrente jogadores em batalhas intensas.'
  },

  {
    id: 10,
    nome: 'TEKKEN 8',
    ano: 2024,
    genero: 'Luta',
    plataforma: 'PlayStation 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/tekken-8/',
    sinopse: 'A rivalidade entre Jin Kazama e Kazuya Mishima chega a uma nova e poderosa batalha.'
  },

  {
    id: 11,
    nome: 'Mortal Kombat 1',
    ano: 2023,
    genero: 'Luta',
    plataforma: 'PlayStation 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/mortal-kombat-1/',
    sinopse: 'Explore uma nova era do universo Mortal Kombat e lute com seus personagens favoritos.'
  },

  {
    id: 12,
    nome: 'It Takes Two',
    ano: 2021,
    genero: 'Aventura e romance',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/it-takes-two/',
    sinopse: 'Um casal precisa trabalhar junto em uma aventura divertida para reconstruir sua relação.'
  },

  {
    id: 13,
    nome: 'Barbie: Project Friendship',
    ano: 2024,
    genero: 'Aventura',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://placehold.co/600x900/F4A6C1/FFFFFF?text=Barbie',
    url: 'https://www.playstation.com/pt-br/games/barbie-project-friendship/',
    sinopse: 'Ajude Barbie e suas amigas em missões criativas, encontros divertidos e muita amizade.'
  }
];

export default function Lista({ navigation }) {
  const [filtro, setFiltro] = useState('');
  const jogosFiltrados = jogos.filter(item =>
    item.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const criaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listaItem}
      activeOpacity={0.85}
      onPress={() => {
        Speech.speak(`${item.nome}. ${item.sinopse}`);
        navigation?.navigate
          ? navigation.navigate('Detalhes', { filmes: item })
          : Linking.openURL(item.url);
      }}
    >
      <View style={[styles.capaJogo, { backgroundColor: item.cor }]}>
        <Image source={{ uri: item.imagem }} style={styles.imagemJogo} />
      </View>
      <View style={styles.listaDetalhes}>
        <Text style={styles.nomeJogo} numberOfLines={2}>{item.nome}</Text>
        <Text style={styles.metaJogo}>{item.ano} • {item.genero}</Text>
        <Text style={styles.plataformaJogo} numberOfLines={1}>{item.plataforma}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listaContainer}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>PlayStation <Text style={styles.tituloDestaque}>da Jeny</Text></Text>
        <Text style={styles.subtitulo}>Jogos escolhidos pela Jeny</Text>
        <TextInput
          value={filtro}
          onChangeText={setFiltro}
          placeholder="Buscar jogo"
          placeholderTextColor="#91A3A8"
          style={styles.busca}
        />
      </View>
      <FlatList
        data={jogosFiltrados}
        renderItem={criaItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudoFlatList}
        columnWrapperStyle={styles.linhaLista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listaContainer: {
    flex: 1,
    backgroundColor: '#101820',
    paddingTop: 54
  },
  cabecalho: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  titulo: {
    color: '#F4F1DE',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 0.5
  },
  tituloDestaque: {
    color: '#F2C14E'
  },
  subtitulo: {
    color: '#A8B5B9',
    fontSize: 14,
    marginTop: 4
  },
  busca: {
    backgroundColor: '#1B2930',
    color: '#F4F1DE',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 16
  },
  conteudoFlatList: {
    paddingHorizontal: 14,
    paddingBottom: 24
  },
  linhaLista: {
    justifyContent: 'space-between'
  },
  listaItem: {
    backgroundColor: '#1B2930',
    marginBottom: 14,
    padding: 9,
    borderRadius: 14,
    width: '48%',
    minHeight: 270,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 }
  },
  capaJogo: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  imagemJogo: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  iconeJogo: {
    color: '#FFF8E7',
    fontSize: 54,
    fontWeight: '900'
  },
  numeroJogo: {
    position: 'absolute',
    top: 8,
    right: 9,
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 11,
    fontWeight: '800'
  },
  listaDetalhes: {
    width: '100%'
  },
  nomeJogo: {
    color: '#F4F1DE',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 19,
    minHeight: 38
  },
  metaJogo: {
    color: '#F2C14E',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 6
  },
  plataformaJogo: {
    color: '#91A3A8',
    fontSize: 11,
    marginTop: 5
  }
});
