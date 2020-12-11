import React from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import useFetch from '../hooks/useFetch';

const Detail = ({navigation, route}) => {
  console.log('DetailScreen', route.params);

  const {codigo} = route.params;
  const [data, loading] = useFetch(`https://mindicador.cl/api/${codigo}`);

  const goToBack = () => {
    navigation.push('Home');
  };

  return (
    <View style={styles.contenedor}>
      <Text>{data.nombre}</Text>
      <Text>{data.unidad_medida}</Text>
      {loading ? (
        <Text> cargando...</Text>
      ) : (
        <FlatList
          keyExtractor={(item) => Date.parse(item.fecha)}
          data={data.serie}
          renderItem={(item) => (
            <View style={{padding: 5}}>
              <Text>{item.item.fecha}</Text>
              <Text>{item.item.valor}</Text>
            </View>
          )}
        />
      )}

      <Button title="back" onPress={() => goToBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Detail;
