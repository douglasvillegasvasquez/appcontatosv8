import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
import Cartao from './Cartao';
import Cores from '../cores/Cores';
import Medidas from '../medidas/Medidas';
import moment from 'moment'
const ContatoItem = (props) => {

    const excluirContato = () =>{

        Alert.alert(

            'Excluir Contato',
            'Deseja realmente Excluir esse Contato',
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { 
                    text: "OK", 
                    onPress: () => props.onDelete(props.keys)
                }
            ],

            { cancelable: false }
        )
    } 

    return(
        <TouchableOpacity 
            style={styles.contatoItem}
            onLongPress={excluirContato} 
            onPress={props.contSelecionado.bind(this, props.keys)}
        >
           <View style = { styles.itemNaLista}>
               
               <View>
               <Image style={styles.imagem} source={{uri:props.imagem}}/>
            
                <View style = { styles.Titulo}>
               
                    <Text style ={styles.contato}>
                        
                    {props.contato}
                    </Text>
                </View>
        </View>
                    <Text  style = { styles.Nome}>
                    {props.telefone}
                    </Text>
                <Text style={{color:'#000',fontSize:10}}>  Celular</Text>  
                <Text>{'latitude:   ' + props.lat}</Text>
                <Text>{'longitude:  ' + props.lng}</Text>    
                <Text >{'Data: ' + moment(new Date(props.data)).format("DD/MM/YYYY")} {moment(new Date(props.data)).format("HH:m")}</Text>
    
            </View>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contato:{color:'#FFFAFA',
    fontSize:18,
    marginLeft:16
},
    Titulo:{
        paddingTop: 215,
        paddingBottom: 10,
        backgroundColor:Cores.fundo2,
        marginLeft:-12,
        marginRight:-12,
        marginTop:-250,
        marginBottom:10,        
        borderRadius: 3,
        
       
    },
    itemNaLista:{
        height:395,
        width:340,
        paddingTop: 0,
        paddingBottom:10,
        padding: 12,
        backgroundColor: Cores.branco,
        borderBottomColor: '#000',
        borderWidth: 1,
        marginBottom:20,
        borderRadius: 3
    },
    Nome:{
        paddingTop:6,
        marginBottom:10,
        fontSize:16,
        color:'#000',
        marginLeft:4
    },
    
    imagem:{
        width: 340,
        height: 250,
        borderRadius:1,
        alignSelf: 'center'
    },
    contatoItem:{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 1,
        width:500,
       
        
    }
});

export default ContatoItem;

