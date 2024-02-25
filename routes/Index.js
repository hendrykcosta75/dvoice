import{createNativeStackNavigator} from '@react-navigation/native-stack'

import TelaWelcome from '../src/telas/TelaWelcome'
import TelaLogin from '../src/telas/TelaLogin'
import TelaCadastro from '../src/telas/TelaCadastro'
import TelaConversao from '../src/telas/TelaConversao'
import TelaRecuperarSenha from '../src/telas/TelaRecuperarSenha'
import TelaTeste from '../src/telas/TelaTeste'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabScreen() {
    return (
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: 'absolute', backgroundColor:'#000000' },
        }}
        
        tabBarOptions={{
            activeTintColor: '#F3069F',
        }}
      >
        <Tab.Screen
        name="Conversor"
        component={TelaConversao}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons8-home-50.png')}
              style={{ width: 20, height: 20, tintColor: focused ? '#F3069F' : 'gray' }}
            />
          ),
        }}
      />
        <Tab.Screen
        name="Historico"
        component={TelaTeste}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/history.png')}
              style={{ width: 20, height: 20, tintColor: focused ? '#F3069F' : 'gray' }}
            />
          ),
        }}
      />
      </Tab.Navigator>
    );
  }
  

export default function Routes({ user }){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={TelaWelcome}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Login"
            component={TelaLogin}
            options={{headerShown: false}}
            />

        <Stack.Screen
            name="Cadastro"
            component={TelaCadastro}
            options={{headerShown: false}}
            />

        
        

        {user ? (
            <>
            <Stack.Screen name="Conversor" component={TabScreen} options={{ headerShown: false }} />
            </>
        ) : null}



        <Stack.Screen
            name="RecuperarSenha"
            component={TelaRecuperarSenha}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}