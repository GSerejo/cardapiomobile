import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


// adcionar foto de fundo para aba do hamburgur e cerveja
export default function HamburgersScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#db8e16', dark: '#42220b' }}
      
      headerImage={
              <Image
                source={require('../../assets/images/hamburguerFundo.png')}
                style={styles.burguerBack}
              />
            }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hambúrgueres</ThemedText>
      </ThemedView>
      <ThemedText>🍔Escolha o seu hambúrguer favorito do nosso cardápio!🍔</ThemedText>
      <Collapsible title="Opções de Hambúrguer">
        <ThemedText>
          Temos várias opções de hambúrgueres gourmet, com carnes, vegetais e até opções veganas!
        </ThemedText>
      </Collapsible>
      <Collapsible title="Combos Especiais">
        <ThemedText>
          Que tal um combo de hambúrguer com fritas e uma cerveja artesanal?
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db8e16', // Define a cor do topo como fundo de toda a tela
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  burguerBack: {
    height: 250,
    width: 400,
    bottom: 0,
    //left: 50,
    position: 'absolute',
  },
});

