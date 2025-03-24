import React, { useState } from 'react';
import { ImageBackground, Image, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const backgroundImage = require('../assets/images/fundoLogin.png');

const RegisterScreen = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={() => alert('Cadastro realizado!')} />
      <TouchableOpacity onPress={() => router.push('/LoginScreen')}>
        <Text style={styles.link}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F0F4FF',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#FFF',
  },
  link: {
    color: '#007BFF',
    marginTop: 12,
    textAlign: 'center',
  },
});

export default RegisterScreen;