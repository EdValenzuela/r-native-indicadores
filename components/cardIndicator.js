import React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//CSS
import globalStyles from '../styles/global';

const CardIndicator = ({item}) => {
  const navigation = useNavigation();

  const goToDetail = (codigo) => {
    console.log('CLICK INDICADOR', codigo);
    navigation.navigate('Detail', {codigo});
  };

  return (
    <>
      <ScrollView style={globalStyles.boxIndicator}> 
        <View>{item.nombre && <Text style={globalStyles.letterName}>{item.nombre}</Text>}</View>
        <View style={globalStyles.boxDetail}>
          {item.unidad_medida && <Text style={globalStyles.letterUnity}>{item.unidad_medida}</Text>}

          {item.unidad_medida && item.nombre ? (
            <View style={globalStyles.buttonDetail}>
              <Button
                title="See Details"
                onPress={() => goToDetail(item.codigo)}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
    </>
  );
};

export default CardIndicator;
