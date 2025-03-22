import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button } from '../../components/button';
import { router } from 'expo-router';

function MudarPagina(){
    router.navigate("/explore")
}

export default function Dashboard(){
    return(
        <ScrollView style={styles.Rolagem}>
            <View style={styles.Pagina}>
                <Text style={styles.TextoCentral}>Hello World!</Text>
                <Button title="Voltar" onPress={MudarPagina}/>
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
})