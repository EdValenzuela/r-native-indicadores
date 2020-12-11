import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import { myIndicatorContext } from '../context/IndicatorsContext';

import CardIndicator from '../components/cardIndicator';

const Home = ({navigation}) => {

    const { data, loading } = useContext(myIndicatorContext);

    const information = {
        id:1, 
        total:500
    }

    const visitarDetalle = () =>{
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.contenedor}>
            <Text>Inicio</Text>
            <Button
                classname="btn btn-primary" 
                title="ir a nosotros"
                onPress={ () => visitarDetalle() } 
            />
            {
                // Object.keys(data).forEach((e) => { 
                //     console.log(e,':', data[e].codigo);
                //     // <Button
                //     //     classname="btn btn-primary" 
                //     //     title="ir a nosotros"
                //     //     onPress={ () => visitarDetalle(data[e].codigo && data[e].codigo) } 
                //     // />

                //     // {<Link to={`/Detail/${data[e].codigo}`}>Ver detalle</Link>}
                    
                // })
                <View style={styles.contenedor}>
                    <FlatList
                        data={Object.keys(data)}
                        renderItem={({ item }) => <CardIndicator item={data[item]} />}
                    />
                </View>
            }

            
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Home
