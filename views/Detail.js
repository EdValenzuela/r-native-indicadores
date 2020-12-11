import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Detail = ({navigation, route}) => {

    const {codigo} = route.params;

    const goToBack = ()=>{
        navigation.push('Home');
    }

    return (
        <View style={styles.contenedor}>
            <Text>{codigo}</Text>
            <Button 
                title="back"
                onPress={ () => goToBack() } 
            />
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

export default Detail
