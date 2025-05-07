import { Button } from '@/components/Ybutton';
import React from 'react';
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: '1', title: 'Salgado' , valor: '5,00', pedido: require("../../assets/images/salgado.jpg")},
  { id: '2', title: 'Sanduiche' , valor: '7,00', pedido: require("@/assets/images/sanduiche.jpg")},
  { id: '3', title: 'Sobremesa' , valor: '4,00', pedido: require("@/assets/images/sorvete.jpg")},
  { id: '4', title: 'Bebida' , valor: '2,00', pedido: require("@/assets/images/suco.png")},
  { id: '5', title: 'Refeição' , valor: '10,00', pedido: require("@/assets/images/parmegiana.jpg")},
];

interface ItemProps {
  title: string
  valor: number | string
  pedido: ImageSourcePropType
}

interface RenderitemProps {
  id: string
  title: string
  valor: number | string
  pedido: ImageSourcePropType
}

const Item = ({title, valor, pedido} : ItemProps) => (
  <View style={styles.caixa}>
    <Text style={styles.titulo}>{title}</Text>
    <Image style={styles.imagem} source={pedido}/>
    <Text style={styles.descriçao}>R$ {valor}</Text>
    <View style={styles.tresbotoes}>
      <Button title="Comprar" onPress={() => alert(`${title} Comprado`)}></Button>
      <Button title="Adicionar"></Button>
      <Button title="Remover"></Button>
    </View>
  </View>
);

export default function App(){
  const renderItem = ({ item } : {item : RenderitemProps}) => (
    <Item title={item.title} valor={item.valor} pedido={item.pedido}/>
  );

  return (
    <View style={styles.pagina}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ffd33d'
  },
  caixa: {
    borderRadius: 9,
    backgroundColor: '#8B0000',
    padding: 15,
    marginVertical: 7,
    gap: 5
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff'
  },
  descriçao: {
    fontSize: 20,
    color: '#fff'
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: "cover"
  },
  tresbotoes: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});