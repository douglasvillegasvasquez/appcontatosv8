import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Cores from '../cores/Cores';

const TiraFoto = (props) => {

    const [imagemURI, setImagemURI] = useState();
    
    const tirarFoto = async() => {
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect:[3,4],
            quality: 1
        });
        //console.log(foto);
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }
    const PegarFoto = async() => {
        const foto = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect:[3,4],
            quality: 1
        });
        //console.log(foto);
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }

    return (
        <View style={estilos.principal}>
            <View style={estilos.previewDaImagem}>
                {
                    !imagemURI ?
                    <Text>Nenhuma Foto.</Text>
                    :
                    <Image 
                    style={estilos.imagem} 
                    source={{uri:imagemURI}}
                />

                }
            </View>
            <View style={{padding:20, flexDirection:'row'}}>
            <View style={{paddingHorizontal:20}}>
            <Button 
                title='Tirar foto'
                onPress={tirarFoto}
            />
            </View>
            <Button 
                title="Abrir Galeria"
                onPress={PegarFoto}
            />
            </View>
        </View>
    )
};

export default TiraFoto;

const estilos = StyleSheet.create({
    principal:{
        alignItems: 'center',
        marginBottom: 15
    },
    previewDaImagem:{
        width: '100%',
        height: 200,
        justifyContent: 'center',
        marginBottom: 10,
        borderColor: Cores.corHeader,
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    }
});
