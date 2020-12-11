import React, { useContext } from 'react';
import { Link } from '@react-navigation/native';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import { myIndicatorContext } from '../context/IndicatorsContext';

const Home = ({navigation}) => {

    const { data, loading } = useContext(myIndicatorContext);

    const information = {
        id:1, 
        total:500
    }

    const visitarDetalle = (codigo) =>{
        console.log(codigo);
        navigation.navigate('Detail', codigo ? codigo : null);
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
                Object.keys(data).forEach((e) => { 
                    console.log(e,':', data[e].codigo);
                    <Button
                        classname="btn btn-primary" 
                        title="ir a nosotros"
                        onPress={ () => visitarDetalle(data[e].codigo) } 
                    />
                    // {<Link to={`/Detail/${data[e].codigo}`}>Ver detalle</Link>}
                    
                })
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
