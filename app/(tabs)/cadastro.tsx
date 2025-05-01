import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Rbutton';
import { Input } from '../../components/input';

export default function Cadastro(){

  const [name , setName] = useState("")
  const [mensagem, setMensagem] = useState("")
  function MudarPagina(){
    router.navigate("/+not-found")
  }

  return(
      <View style={styles.Pagina}>
        <Text style={styles.TextoCentral}>Cadastro do Cliente</Text>
        <Text style={styles.Resposta}>Nome: {name}</Text>
        <Input onChangeText={setName} placeholder='Nome'/>
        <Button title='Confirmar' onPress={() => alert("Registrado")}/>
        <Text style={styles.Resposta}>({mensagem})</Text>
        <Button title='Mostrar' onPress={() => setMensagem("Hello World")}/>
        <Button title='Esconder' onPress={() => setMensagem("")}/> 
        <Button title='Não Aperte Aqui!' onPress={MudarPagina}/>
      </View>
  )
}

const styles = StyleSheet.create({
  Rolagem:{
    flex: 1
  },
  Pagina: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffd33d',
    gap: 10
  },
  TextoCentral: {
    textAlign: 'center',
    color: '#8B0000',
    fontSize: 30,
    fontWeight: "bold",
  },
  Resposta: {
    textAlign: 'center',
    color: '#8B0000',
    fontSize: 18,
    fontWeight: "bold",
    borderColor: "#000",
  }
})
