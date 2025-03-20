import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function BeersScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="beer"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Cervejas Artesanais</ThemedText>
      </ThemedView>
      <ThemedText>🍺Aqui você encontra a variedade das melhores cervejas artesanais!🍺</ThemedText>
      <Collapsible title="Tipos de Cerveja">
        <ThemedText>
          Explore diferentes tipos de cervejas artesanais, como IPA, Lager, Stout, e mais.
        </ThemedText>
      </Collapsible>
      <Collapsible title="História da Cerveja">
        <ThemedText>
          A cerveja artesanal tem uma longa história, com raízes em tradições de diferentes culturas.
        </ThemedText>
        <ExternalLink href="https://www.cervejaartesanal.com">
          <ThemedText type="link">Saiba mais sobre cervejas artesanais</ThemedText>
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
