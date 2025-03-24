import React, { useState } from 'react';
import { StyleSheet, Image, FlatList, View, Modal, Text, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as CartContext from '@/context/CartContext';

const combos = [
  {
    id: 'combo1',
    name: 'Combo Burger + Cerveja Sour',
    description: 'Um hambúrguer e batata frita de sua escolha acompanhado de uma cerveja Sour.',
    price: 'R$ 48,00',
    image: require('../../assets/images/combo1.png'),
  },
  {
    id: 'combo2',
    name: 'Combo BBurger + Cerveja Lager',
    description: 'Um Burguer Barbecue acompanhado de uma cerveja Lager Pilsen.',
    price: 'R$ 45,00',
    image: require('../../assets/images/combo2.png'),
  },
  {
    id: 'combo3',
    name: 'Combo CKBurger + Cerveja Lager Orange',
    description: 'Um hambúrguer Chickenz Classic acompanhado de uma cerveja Lager Orange.',
    price: 'R$ 40,00',
    image: require('../../assets/images/combo3.png'),
  },
];

export default function CombosScreen() {
  const { addToCart } = CartContext.useCart();
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (combo) => {
    setSelectedCombo(combo);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCombo(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={combos}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Image source={require('../../assets/images/combos-capa.png')} style={styles.banner} />
            <ThemedView style={styles.container}>
              <ThemedText type="title">Combos Harmonizados</ThemedText>
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

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedCombo && (
              <>
                <Image source={selectedCombo.image} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedCombo.name}</Text>
                <Text style={styles.modalDescription}>{selectedCombo.description}</Text>
                <Text style={styles.modalPrice}>{selectedCombo.price}</Text>

                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => {
                    addToCart(selectedCombo);
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
  banner: {
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