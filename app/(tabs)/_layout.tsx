import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
         
          default: {},
        }),
        tabBarLabelStyle: {
          fontSize: 12, // Ajuste o tamanho do texto do label
          fontWeight: '600',
          marginBottom: 4, // Espaçamento entre o ícone e o texto
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('@/assets/images/home-icon.png')} // Caminho do ícone de home
              style={{ width: 28, height: 28, shadowColor: '#fff',}} // Ajuste o tamanho do ícone e aplique a cor
            />
          ),
        }}
      />
      <Tabs.Screen
        name="hamburgers"
        options={{
          title: 'Hambúrgueres',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/hamburguer-icon.png')} // Caminho do ícone de hambúrguer
              style={{ width: 28, height: 28, }} // Ajuste o tamanho do ícone e aplique a cor
              />
            ),
          
          }}
        />
      <Tabs.Screen
        name="beers"
        options={{
          title: 'Cervejas',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/lupulo-icon.png')} // Caminho do ícone de cerveja
              style={{ width: 28, height: 28 }} // Ajuste o tamanho do ícone e aplique a cor
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="combos"
        options={{
          title: 'combos',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/combos-icon.png')} // Caminho do ícone de hambúrguer
              style={{ width: 28, height: 28, }} // Ajuste o tamanho do ícone e aplique a cor
              />
            ),
          
          }}
        />
         
      <Tabs.Screen
        name="CartScreen"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images//Cart-icon.png')} // Caminho do ícone de hambúrguer
              style={{ width: 28, height: 28, }} // Ajuste o tamanho do ícone e aplique a cor
              />
            ),
          
          }}
        />
    </Tabs>
  );
}
