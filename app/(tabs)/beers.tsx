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
                    <Image
                      source={require('../../assets/images/cerveja-capa.jpg')}
                      style={styles.beerBack}
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
  beerBack: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
