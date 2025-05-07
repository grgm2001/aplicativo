import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Rbutton';
import { Input } from '../../components/input';

export default function Cadastro(){

  const [name , setName] = useState("")
  const [entry , setEntry] = useState("")
  const [count , setCount] = useState(0)


  function MudarPagina(){
    router.navigate("/+not-found")
  }

  return(
      <View style={styles.Pagina}>
        <Text style={styles.TextoCentral}>Cadastro do Cliente</Text>
        <Text style={styles.Resposta}>Nome: {name}</Text>
        <Text style={styles.Resposta}>Conta: {count}</Text>
        <Input onChangeText={setEntry} placeholder='Nome'/>
        <View style={styles.DoisBotoes}>
          <Button title='Confirmar' onPress={() => setName(entry)}/>
          <Button title='Não Aperte Aqui!' onPress={MudarPagina}/>
        </View>
        <View style={styles.DoisBotoes}>
          <Button title='Mostrar' onPress={() => setName("Hello World")}/>
          <Button title='Esconder' onPress={() => setName("")}/>
        </View>
        <View style={styles.DoisBotoes}>
          <Button title='Adicionar' onPress={() => setCount(count+1)}/>
          <Button title='Remover' onPress={() => setCount(count-1)}/>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  Pagina: {
    flex: 1,
    padding: 15,
    gap: 10,
    backgroundColor: '#ffd33d',
  },
  TextoCentral: {
    textAlign: 'center',
    color: '#8B0000',
    fontSize: 30,
    fontWeight: "bold",
  },
  Resposta: {
    textAlign: 'left',
    color: '#8B0000',
    fontSize: 18,
    fontWeight: "bold",
    borderColor: "#000",
  },
  DoisBotoes: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
