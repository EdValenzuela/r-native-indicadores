import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:20,
        paddingVertical:30,
        backgroundColor:'#fff',
    },
    boxIndicator:{
        borderBottomColor: '#ccc',
        // borderBottomWidth: 1
    },
    boxDetail:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:5
    },
    letterName:{
        color: '#000',
        fontSize: 20,
    },
    letterUnity:{
        color: '#2296f3',
        fontSize: 16,
        paddingVertical: 15
    },
    letterDetail:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#000',
        fontSize: 20,
        marginBottom:20,
    },
    buttonDetail:{
        alignItems:'center',
        justifyContent:'center',
        textTransform:'lowercase'
    }
});

export default globalStyles;