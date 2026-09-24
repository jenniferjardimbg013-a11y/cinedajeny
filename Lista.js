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
    imagem: require('./assets/nota1.jpg'),
    url: 'https://www.playstation.com/pt-br/games/marvels-spider-man-2/',
    sinopse: 'Peter Parker e Miles Morales protegem Nova York enquanto enfrentam novos inimigos e desafios.'
  },

  {
    id: 2,
    nome: 'God of War Ragnarök',
    ano: 2022,
    genero: 'Ação e aventura',
    plataforma: 'PlayStation 4 • 5',
    imagem: require('./assets/nota2.jpg'),
    url: 'https://www.playstation.com/pt-br/games/god-of-war-ragnarok/',
    sinopse: 'Kratos e Atreus viajam pelos reinos nórdicos em busca de respostas antes do Ragnarök.'
  },

  {
    id: 3,
    nome: 'The Last of Us Part I',
    ano: 2022,
    genero: 'Ação e aventura',
    plataforma: 'PlayStation 5',
    imagem: require('./assets/nota3.jpg'),
    url: 'https://www.playstation.com/pt-br/games/the-last-of-us-part-i/',
    sinopse: 'Joel precisa atravessar um mundo destruído para proteger Ellie em uma jornada emocionante.'
  },

  {
    id: 4,
    nome: 'Gran Turismo 7',
    ano: 2022,
    genero: 'Corrida',
    plataforma: 'PlayStation 4 • 5',
    imagem: require('./assets/nota4.jpg'),
    url: 'https://www.playstation.com/pt-br/games/gran-turismo-7/',
    sinopse: 'Corra em pistas famosas, personalize seus carros e viva uma experiência realista de velocidade.'
  },

  {
    id: 5,
    nome: 'Horizon Forbidden West',
    ano: 2022,
    genero: 'RPG',
    plataforma: 'PlayStation 4 • 5',
    imagem: require('./assets/nota5.jpg'),
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
    imagem: require('./assets/ultima.jpg'),
    url: 'https://www.playstation.com/pt-br/games/barbie-project-friendship/',
    sinopse: 'Ajude Barbie e suas amigas em missões criativas, encontros divertidos e muita amizade.'
  },

  {
    id: 14,
    nome: 'Guilty Gear -Strive-',
    ano: 2021,
    genero: 'Luta',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1384160/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/guilty-gear-strive/',
    sinopse: 'Domine combates intensos, golpes especiais e uma trilha sonora marcante em duelos eletrizantes.'
  },

  {
    id: 15,
    nome: 'UFC 5',
    ano: 2023,
    genero: 'Luta e esporte',
    plataforma: 'PlayStation 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2296990/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/ufc-5/',
    sinopse: 'Entre no octógono, use técnicas de luta e dispute combates realistas pelo cinturão.'
  },

  {
    id: 16,
    nome: 'Life is Strange: True Colors',
    ano: 2021,
    genero: 'Aventura e romance',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/936790/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/life-is-strange-true-colors/',
    sinopse: 'Faça escolhas, descubra sentimentos escondidos e construa relações em uma história emocionante.'
  },

  {
    id: 17,
    nome: 'Lake',
    ano: 2021,
    genero: 'Aventura e romance',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1118240/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/lake/',
    sinopse: 'Viva uma história tranquila, conheça os moradores de uma pequena cidade e descubra novas conexões.'
  },

  {
    id: 18,
    nome: 'Sherlock Holmes Chapter One',
    ano: 2021,
    genero: 'Investigação',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1137300/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/sherlock-holmes-chapter-one/',
    sinopse: 'Investigue crimes, interrogue suspeitos e use a lógica para solucionar mistérios em uma ilha.'
  },

  {
    id: 19,
    nome: 'L.A. Noire',
    ano: 2011,
    genero: 'Investigação e ação',
    plataforma: 'PlayStation 4',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/110800/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/la-noire/',
    sinopse: 'Examine pistas, interrogue testemunhas e resolva casos policiais na Los Angeles dos anos 1940.'
  },

  {
    id: 20,
    nome: 'Helldivers 2',
    ano: 2024,
    genero: 'Tiro',
    plataforma: 'PlayStation 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/553850/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/helldivers-2/',
    sinopse: 'Lute em equipe contra ameaças alienígenas e defenda a Super Terra em missões explosivas.'
  },

  {
    id: 21,
    nome: 'Returnal',
    ano: 2021,
    genero: 'Tiro e ficção científica',
    plataforma: 'PlayStation 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1649240/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/returnal/',
    sinopse: 'Enfrente criaturas alienígenas, explore um planeta misterioso e tente quebrar um ciclo infinito.'
  },

  {
    id: 22,
    nome: 'Call of Duty: Black Ops 6',
    ano: 2024,
    genero: 'Tiro e ação',
    plataforma: 'PlayStation 4 • 5',
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2933620/library_600x900_2x.jpg',
    url: 'https://www.playstation.com/pt-br/games/call-of-duty-black-ops-6/',
    sinopse: 'Participe de uma campanha de espionagem e enfrente outros jogadores em batalhas intensas.'
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
          ? navigation.navigate('Detalhes', { jogo: item })
          : Linking.openURL(item.url);
      }}
    >
      <View style={[styles.capaJogo, { backgroundColor: item.cor || '#1F2A32' }]}>
        <Image
          source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem}
          style={styles.imagemJogo}
        />
      </View>
      <View style={styles.listaDetalhes}>
        <Text style={styles.nomeJogo} numberOfLines={2}>{item.nome}</Text>
        <Text style={styles.metaJogo} numberOfLines={1}>{item.ano} • {item.genero}</Text>
        <Text style={styles.plataformaJogo} numberOfLines={1}>{item.plataforma}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listaContainer}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo} numberOfLines={2}>Jogos PlayStation <Text style={styles.tituloDestaque}>da Giovana</Text></Text>
        <Text style={styles.subtitulo}>Bem-vinda ao mundo dos jogos da Giovana!</Text>
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
    paddingBottom: 22
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
    marginTop: 6,
    letterSpacing: 0.3
  },
  busca: {
    backgroundColor: '#1B2930',
    color: '#F4F1DE',
    borderWidth: 1,
    borderColor: '#2E3D46',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginTop: 18,
    fontSize: 15,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }
  },
  conteudoFlatList: {
    paddingHorizontal: 14,
    paddingBottom: 24
  },
  linhaLista: {
    justifyContent: 'space-between'
  },
  listaItem: {
    backgroundColor: '#1A2730',
    marginBottom: 14,
    padding: 9,
    borderRadius: 18,
    width: '48%',
    height: 286,
    borderWidth: 1,
    borderColor: '#2F434F',
    borderTopWidth: 2,
    borderTopColor: '#18A0FB',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 4 }
  },
  capaJogo: {
    width: '100%',
    height: 170,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#3A4F5D'
  },
  imagemJogo: {
    width: '100%',
    height: '100%',
    borderRadius: 12
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
