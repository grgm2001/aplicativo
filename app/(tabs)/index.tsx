import { Image, StyleSheet, Platform, Text, View, ScrollView, Alert, TextInput } from 'react-native';

export default function HomeScreen(){
  return(
    <ScrollView style={styles.Rolagem}>
      <View style={styles.PaginaCentral}>
        <Text style={styles.TextoCentral}>Cardapio - Gabriel Reis</Text>

        <Text style={styles.TextoItem}>1 - Parmegiana R$ 30</Text>
        <Image style={styles.ImagemInicial} source={require('@/assets/images/parmegiana.jpg')}/>
        <Text style={styles.TextoDesc}>Carne ou Frango, Acompanhamentos: Arroz, Fritas</Text>

        <Text style={styles.TextoItem}>2 - Peixe R$ 20</Text>
        <Image style={styles.ImagemInicial} source={require('@/assets/images/peixe.jpg')}/>
        <Text style={styles.TextoDesc}>Ao molho ou Empanado, Acompanhamentos: Arroz, Fritas</Text>

        <Text style={styles.TextoItem}>3 - Lasanha R$ 40</Text>
        <Image style={styles.ImagemInicial} source={require('@/assets/images/Lasanha.jpg')}/>
        <Text style={styles.TextoDesc}>Bolonhesa, Frango ou Presunto e Queijo, Sem Acompanhamentos</Text>

        <Text style={styles.TextoItem}>4 - Frango Assado R$ 24</Text>
        <Image style={styles.ImagemInicial} source={require('@/assets/images/frango.jpg')}/>
        <Text style={styles.TextoDesc}>Acompanhamentos: Farofa</Text>

        <Text style={styles.TextoItem}>5 - Risoto R$ 45</Text>
        <Image style={styles.ImagemInicial} source={require('@/assets/images/Risoto.jpg')}/>
        <Text style={styles.TextoDesc}>Carne ou Camarão, Sem Acompanhamentos</Text>

        <Text style={styles.TextoDrinks}>Bebidas</Text>
        <Text style={styles.TextoDrinks}>1 - Refrigerante R$ 7</Text>
        <Text style={styles.TextoDrinks}>2 - Suco R$ 5</Text>
        <Text style={styles.TextoDrinks}>3 - Agua R$ 2</Text>
      </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  Rolagem:{
    flex: 1
  },
  PaginaCentral: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFE0'
  },
  TextoCentral: {
    textAlign: 'center',
    color: '#8B0000',
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  TextoItem: {
    textAlign: 'auto',
    color: '#800000',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 1
  },
  TextoDesc: {
    fontSize: 15,
    textAlign: 'justify',
    fontStyle: "normal",
    marginBottom: 10
  },
  TextoDrinks:{
    fontSize: 18,
    color: "#4B0082",
    fontWeight: "bold"
  },
  ImagemInicial: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  }
});