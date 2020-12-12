import 'react-native-gesture-handler';
import React, { useContext } from 'react';

import IndicatorsContext from './context/IndicatorsContext';

import globalStyles from './styles/global';
// import 'bootstrap/dist/css/bootstrap.min.css';

//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
import Detail from './views/Detail';

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
    <IndicatorsContext>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: '#000'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            }
          }}
          >
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{title:'Indicadores'}}
          />
          <Stack.Screen 
            name="Detail"
            component={Detail}
            // options={{title:'Detalle Indicador'}}
            options={ ({route}) =>({
              title: `Detail ${route.params.codigo}`,
              headerTitleStyle:{
                textTransform:'capitalize'
              }
            }) }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </IndicatorsContext>
    </>
  );
};

export default App;
