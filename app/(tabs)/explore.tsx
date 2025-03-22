import { StyleSheet, Image, Platform, ScrollView, View, Text, Alert } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { Button } from '../../components/button';
import { Input } from '../../components/input';

export function Mensagem(){
  return(
    Alert.alert("Em Breve")
  )
}

function MudarPagina(){
  router.navigate("/dashboard")
}

export default function Cadastro(){

  const [name , setName] = useState("")

  return(
    <ScrollView style={styles.Rolagem}>
      <View style={styles.Pagina}>
        <Text style={styles.TextoCentral}>Cadastro do Cliente</Text>
        <Text style={styles.Resposta}>Nome: {name}</Text>
        <Input onChangeText={setName}/>
        <Button title='Entrar' onPress={Mensagem}/>
        <Button title='Proximo' onPress={MudarPagina}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Rolagem:{
    flex: 1
  },
  Pagina: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFE0',
    gap: 10
  },
  TextoCentral: {
    textAlign: 'center',
    color: '#8B0000',
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5
  },
  Resposta: {
    textAlign: 'center',
    color: '#8B0000',
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5
  }
})
