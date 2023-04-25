import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../components/modules';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{headerShown: false}}  component={Login} />
        </Stack.Navigator>
    );
};

export default StackNavigator;