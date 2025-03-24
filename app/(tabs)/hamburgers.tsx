import React, { useState } from 'react';
import { StyleSheet, Image, FlatList, View, Modal, Text, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const hamburgers = [
  {
    id: '1',
    name: 'Chickenz Classic',
    description: 'Pão brioche, chicken supreme burger seara, duplo queijo prato...',
    price: 'R$ 33,00',
    image: require('../../assets/images/burguer1.png'),
  },
  {
    id: '2',
    name: 'Chickenz Classic',
    description: 'Pão brioche, chicken supreme burger seara, duplo queijo prato...',
    price: 'R$ 33,00',
    image: require('../../assets/images/burguer2.png'),
  },
  {
    id: '3',
    name: 'Chickenz Classic',
    description: 'Pão brioche, chicken supreme burger seara, duplo queijo prato...',
    price: 'R$ 33,00',
    image: require('../../assets/images/burguer3.png'),
  },
  {
    id: '4',
    name: 'Chickenz Classic',
    description: 'Pão brioche, chicken supreme burger seara, duplo queijo prato...',
    price: 'R$ 33,00',
    image: require('../../assets/images/burguer4.png'),
  },
  {
    id: '5',
    name: 'Chickenz Classic',
    description: 'Pão brioche, chicken supreme burger seara, duplo queijo prato...',
    price: 'R$ 33,00',
    image: require('../../assets/images/burguer5.png'),
  },
  {
    id: '6',
    name: 'Chickenz Classic',
    description: 'Pão brioche, chicken supreme burger seara, duplo queijo prato...',
    price: 'R$ 33,00',
    image: require('../../assets/images/burguer6.png'),
  },
];

export default function HamburgersScreen() {
  const [selectedBurger, setSelectedBurger] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Função para abrir o modal
  const openModal = (burger) => {
    setSelectedBurger(burger);
    setModalVisible(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedBurger(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={hamburgers}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Image source={require('../../assets/images/hamburguerFundo.png')} style={styles.burguerBack} />
            <ThemedView style={styles.container}>
              <ThemedText type="title">Hambúrgueres</ThemedText>
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
            {selectedBurger && (
              <>
                <Image source={selectedBurger.image} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedBurger.name}</Text>
                <Text style={styles.modalDescription}>{selectedBurger.description}</Text>
                <Text style={styles.modalPrice}>{selectedBurger.price}</Text>

                <TouchableOpacity style={styles.addToCartButton} onPress={() => alert('Adicionado ao carrinho!')}>
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
  burguerBack: {
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
