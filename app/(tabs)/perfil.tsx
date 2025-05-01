import { Button } from '@/components/Bbutton';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Pessoa({nome} : {nome:string}){
  return(
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Button title="Seguir" onPress={() => alert(`Agora você está seguindo ${nome}`)}/>
    </View>
  )
}

export default function Perfil() {
  return (
    <View style={styles.tela}>
      <Pessoa nome="Adriana"/>
      <Pessoa nome="Gabriel"/>
    </View>
  );
}

const styles = StyleSheet.create({
  tela:{
    flex: 1,
    backgroundColor: "#ffd33d",
  },
  card:{
    padding: 9,
    margin: 7,
    backgroundColor: "#fff",
    borderRadius: 7,
    // IOS ou WEB
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // Android
    elevation: 5,
  },
  nome:{
    fontWeight: "bold",
    fontSize: 24,
    color: '#000',
    marginBottom: 5
  }
});