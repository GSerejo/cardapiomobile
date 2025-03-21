import { StyleSheet, Image, FlatList, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const beers = [
  {
    id: '1',
    name: 'IPA - Indian Pale Ale',
    description: 'Cerveja encorpada, amargor marcante com notas cítricas.',
    price: 'R$ 20,00',
    image: require('../../assets/images/lupulo-icon.png'),
  },
  
];

export default function BeersScreen() {
  return (
    <FlatList
      data={beers}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View>
          {/* Cabeçalho com imagem */}
          <Image source={require('../../assets/images/cerveja-capa.jpg')} style={styles.beerBack} />
          <ThemedView style={styles.container}>
            <ThemedText type="title">Cervejas Artesanais</ThemedText>
          </ThemedView>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.textContainer}>
            <ThemedText style={styles.title}>{item.name}</ThemedText>
            <ThemedText style={styles.description}>{item.description}</ThemedText>
            <ThemedText style={styles.price}>{item.price}</ThemedText>
          </View>
          <Image source={item.image} style={styles.image} />
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  beerBack: {
    height: 250,
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#db8e16',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#db8e16',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
