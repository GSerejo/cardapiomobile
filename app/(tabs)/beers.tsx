import React, { useState } from 'react';
import { StyleSheet, Image, FlatList, View, Modal, Text, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as CartContext from '@/context/CartContext';

const beers = [
  {
    id: '1',
    name: 'Lager - Orange',
    description: 'Cerveja leve, amargor marcante da casca da laranja.',
    price: 'R$ 20,00',
    image: require('../../assets/images/cerveja1.png'),
  },
  {
    id: '2',
    name: 'Dose Dupla!',
    description: 'Uma dose dupla para tomar sozinho ou com alguém que não goste de uma cerveja tão amarga. Aqui tem uma IPA e uma Lager.',
    price: 'R$ 45,00',
    image: require('../../assets/images/cerveja2.png'),
  },
  {
    id: '3',
    name: 'Régua de degustação',
    description: 'Uma régua com as variedades mais pedidas da Casa.',
    price: 'R$ 45,00',
    image: require('../../assets/images/reguabeer.png'),
  },
  {
    id: '4',
    name: 'American Beer',
    description: 'Uma cerveja única feita pela casa servida no copo americano com notas cítricas e sabor leve.',
    price: 'R$ 15,00',
    image: require('../../assets/images/cerveja4.png'),
  },
  {
    id: '5',
    name: 'IPA - CoffeBeer',
    description: 'Uma cerveja fervida com grãos de café, aroma e leve sabor de café.',
    price: 'R$ 25,00',
    image: require('../../assets/images/cerveja5.png'),
  },
  {
    id: '6',
    name: 'Mango Beer',
    description: 'Uma cerveja de verão com aromas de manga e sabor cítrico.',
    price: 'R$ 25,00',
    image: require('../../assets/images/cerveja6.png'),
  },
  {
    id: '7',
    name: 'Guinness Beer',
    description: 'Uma campeã do Guinness de melhor e mais gelada cerveja com bola de hidrogênio dentro.',
    price: 'R$ 29,00',
    image: require('../../assets/images/cerveja3.png'),
  },
];

export default function BeersScreen() {
  const { addToCart } = CartContext.useCart();
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Função para abrir o modal
  const openModal = (beer) => {
    setSelectedBeer(beer);
    setModalVisible(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedBeer(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={beers}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Image source={require('../../assets/images/cerveja-capa.jpg')} style={styles.beerBack} />
            <ThemedView style={styles.container}>
              <ThemedText type="title">Cervejas Artesanais</ThemedText>
            </ThemedView>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
            <View style={styles.textContainer}>
              <ThemedText style={styles.title}>{item.name}</ThemedText>
              <ThemedText style={styles.description}>{item.description}</ThemedText>
              <ThemedText style={styles.price}>{item.price}</ThemedText>
            </View>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Modal de Detalhes */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedBeer && (
              <>
                <Image source={selectedBeer.image} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedBeer.name}</Text>
                <Text style={styles.modalDescription}>{selectedBeer.description}</Text>
                <Text style={styles.modalPrice}>{selectedBeer.price}</Text>

                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => {
                    addToCart(selectedBeer);
                    closeModal();
                  }}
                >
                  <Text style={styles.addToCartText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  modalDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
    textAlign: 'center',
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#db8e16',
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: '#db8e16',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 14,
    color: '#007BFF',
  },
});
