import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

// adcionar foto de fundo para aba do hamburgur e creveja
export default function HamburgersScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="burger"
          style={styles.headerImage}
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
        <ExternalLink href="https://www.hamburgueresartesanal.com">
          <ThemedText type="link">Veja todos os nossos combos</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
