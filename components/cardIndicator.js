import React from 'react';
import {Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardIndicator = (props) => {
  const {item} = props;
  const navigation = useNavigation();

  const goToDetail = (codigo) => {
    console.log('CLICK INDICADOR', codigo);
    navigation.navigate('Detail', {codigo});
  };

  return (
    <>
      <View>
        <View>{item.nombre && <Text>{item.nombre}</Text>}</View>
        <View>
          {item.unidad_medida && <Text>{item.unidad_medida}</Text>}

          {item.unidad_medida && item.nombre ? (
            <Button
              title="See Details"
              onPress={() => goToDetail(item.codigo)}
            />
          ) : null}
        </View>
      </View>
    </>
  );
};

export default CardIndicator;
