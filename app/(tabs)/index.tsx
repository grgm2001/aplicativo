import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Menu(){
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
        <Image style={styles.ImagemInicial} source={require('@/assets/images/lasanha.jpg')}/>
        <Text style={styles.TextoDesc}>Bolonhesa, Frango ou Presunto e Queijo, Sem Acompanhamentos</Text>

        <Text style={styles.TextoItem}>4 - Frango Assado R$ 24</Text>
        <Image style={styles.ImagemInicial} source={require('@/assets/images/frango.jpg')}/>
        <Text style={styles.TextoDesc}>Acompanhamentos: Farofa</Text>

        <Text style={styles.TextoItem}>5 - Risoto R$ 45</Text>
        <Image style={styles.ImagemInicial} source={require('@/assets/images/risoto.jpg')}/>
        <Text style={styles.TextoDesc}>Carne ou Camarão, Sem Acompanhamentos</Text>

        <View style={styles.QuadroAzul}>
          <Text style={styles.TextoDrinks}>Bebidas</Text>
          <Text style={styles.TextoDrinks}>1 - Refrigerante R$ 7</Text>
          <Text style={styles.TextoDrinks}>2 - Suco R$ 5</Text>
          <Text style={styles.TextoDrinks}>3 - Agua R$ 2</Text>
        </View>
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
    backgroundColor: '#ffd33d'
  },
  TextoCentral: {
    textAlign: 'center',
    color: '#8B0000',
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 1,
    marginBottom: 25
  },
  TextoItem: {
    textAlign: 'auto',
    color: '#8B0000',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 1,
    marginBottom: 10
  },
  TextoDesc: {
    fontSize: 15,
    textAlign: 'justify',
    fontStyle: "normal",
    marginBottom: 10,
    marginTop: 1
  },
  TextoDrinks:{
    fontSize: 18,
    color: "#4B0082",
    fontWeight: "bold",
    gap: 0,
    textAlign: 'center'
  },
  ImagemInicial: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 1,
    marginTop: 1
  },
  QuadroAzul: {
    gap: 7,
    borderColor:'#4B0082',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});