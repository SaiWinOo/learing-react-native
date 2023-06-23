import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { TouchableOpacity, Text, Image } from 'react-native';
const Stack = createStackNavigator();

import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => {
              console.log('header Left');
            }}>
              <Ionicons name="reorder-three-outline" size={50} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log('header Right');
              }}
            >
              <Image className='w-[40px] h-[40px]' source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png'
              }} />
            </TouchableOpacity>
          ),

        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
