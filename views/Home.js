import React, { useContext } from 'react';
import { Text, View, FlatList } from 'react-native';

//Context
import { myIndicatorContext } from '../context/IndicatorsContext';

//Components
import CardIndicator from '../components/cardIndicator';

//CSS
import globalStyles from '../styles/global';

const Home = () => {

    const { data, loading } = useContext(myIndicatorContext);

    return (
        <View style={globalStyles.container}>
            {
                loading ? (
                    <Text> cargando...</Text>
                  ) : 
                  (
                    <FlatList
                        data={Object.keys(data)}
                        renderItem={({ item }) => <CardIndicator item={data[item]} />}
                        keyExtractor={item => item.codigo}
                    />
                  )
            }
        </View>
    )
}

export default Home
