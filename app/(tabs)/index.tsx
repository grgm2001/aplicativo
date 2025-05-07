import { Button } from '@/components/Rbutton';
import { router } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

function ParaCadastro(){
  router.navigate("/(tabs)/cadastro")
}

function ParaPerfil(){
  router.navigate("/(tabs)/perfil")
}

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

        <View style={styles.DoisBotoes}>
          <Button title='Cadastro' onPress={ParaCadastro}/>
          <Button title='Perfil' onPress={ParaPerfil}/>
        </View>
      </View>
    </ScrollView>

  );
}

export const styles = StyleSheet.create({
    Rolagem:{
        flex: 1,
        backgroundColor: '#ffd33d'
      },
      PaginaCentral: {
        flex: 1,
        padding: 15,
        gap: 10,
        justifyContent: 'center',
        alignContent: 'center',
      },
      TextoCentral: {
        textAlign: 'center',
        color: '#8B0000',
        fontSize: 30,
        fontWeight: "bold",
      },
      TextoItem: {
        textAlign: 'auto',
        color: '#8B0000',
        fontSize: 20,
        fontWeight: "bold",
      },
      TextoDesc: {
        fontSize: 15,
        textAlign: 'auto',
        fontStyle: "italic",
      },
      ImagemInicial: {
        width: 200,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 9
      },
      DoisBotoes: {
        flexDirection: "row",
        justifyContent: "space-between"
      }
})