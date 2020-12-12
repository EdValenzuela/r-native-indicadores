import React from 'react';
import { Text, View, Button, FlatList, ScrollView } from 'react-native';
import useFetch from '../hooks/useFetch';

//CSS
import globalStyles from '../styles/global';

//Date
import { transformDate } from '../helpers/transformDate';

const Detail = ({navigation, route}) => {
  console.log('DetailScreen', route.params);

  const {codigo} = route.params;
  const [data, loading] = useFetch(`https://mindicador.cl/api/${codigo}`);

  const goToBack = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.letterDetail}>{data.nombre}</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          <FlatList
            keyExtractor={(item) => item.fecha}
            data={data.serie}
            renderItem={(item) => (
              <View style={globalStyles.boxDetail}>
                <Text style={globalStyles.letterUnity}>{transformDate(item.item.fecha)}</Text>
                <Text style={globalStyles.letterName}>${item.item.valor}</Text>
              </View>
            )}
          />
        </ScrollView>
      )}

      <Button title="Volver" onPress={() => goToBack()} />
    </View>
  );
};

export default Detail;
