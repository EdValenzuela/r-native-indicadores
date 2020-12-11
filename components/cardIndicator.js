import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Link } from "react-router-native";

const CardIndicator = (props) => {
    // console.log("PROPS => ", props);
    const {item} = props;

    const goToDetail = (codigo) =>{
        console.log("CODIGO => ", codigo);
    }

    return (
        <>
            <View>
                <View>
                    {
                        item.nombre && (
                            <Text>{item.nombre}</Text>
                        )
                    }
                </View>
                <View>
                    {
                        item.unidad_medida && (
                            <Text>{item.unidad_medida}</Text>
                        )
                    }

                    {
                        item.unidad_medida && item.nombre ? (
                            <Button 
                                title="See Details" 
                                onPress={ () => goToDetail(item.codigo) }
                            />
                            // <Link to={`/Detail/?codigo=${item.codigo}`}>
                            //     <Text>See Details</Text>
                            // </Link>
                        ) : null
                    }
                </View>
            </View>             
        </>
    )
}

export default CardIndicator
