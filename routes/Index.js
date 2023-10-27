import{createNativeStackNavigator} from '@react-navigation/native-stack'

import TelaWelcome from '../src/telas/TelaWelcome'
import TelaLogin from '../src/telas/TelaLogin'
import TelaCadastro from '../src/telas/TelaCadastro'

const Stack = createNativeStackNavigator();

export default function Routes(){
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

        </Stack.Navigator>
    )
}