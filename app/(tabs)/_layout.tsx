import { AntDesign, Ionicons } from '@expo/vector-icons/';
import { Tabs } from 'expo-router';

const cor = "#ffd33d"
const tam = 24

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        tabBarInactiveTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#8B0000',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#8B0000',
      },
      }}
    >
      <Tabs.Screen 
      name="index" 
      options={{ 
        title: 'Menu', 
        tabBarIcon: () => (<Ionicons name = 'fast-food' color={cor} size={tam}/>)}} />
      <Tabs.Screen 
      name="cadastro" 
      options={{ 
        title: 'Cadastro', 
        tabBarIcon: () => (<Ionicons name = "document" color={cor} size={tam}/>)}} />
      <Tabs.Screen 
      name="perfil" 
      options={{
        title: 'Perfil',
        tabBarIcon: () => (<AntDesign name = "user" color={cor} size={tam}/>)}} />
      <Tabs.Screen 
      name="lista" 
      options={{
        title: 'Lista',
        tabBarIcon: () => (<AntDesign name = "shoppingcart" color={cor} size={tam}/>)}} />
    </Tabs>
  );
}

