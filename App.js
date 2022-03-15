import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

function App(){
    const [image, setImage] = useState(require('./src/biscoito.png'))
    const [mensagem, setMensagem] =useState('')
    const frases = [
        'Siga os bons e aprenda com eles.', 
        'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ];
      
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor:'white'
        },
        image:{
           
            width: 200,
            height: 200,
            marginBottom: 25
        },
        text:{
            fontSize:20,
            color: 'gray',
            textAlign:'center',
            paddingHorizontal: 8
        },
        button:{
            backgroundColor:'#FFD700',
            paddingVertical: 8,
            width: 250,
            borderRadius: 5
        },
        buttonText:{ 
            color:'black',
            fontSize:16,
            textTransform:'uppercase',
            textAlign:'center',
            fontFamily:'Quicksand-Medium'
        },
        resetButton:{
            paddingVertical: 8,
            width: 250,
            borderRadius: 5
        },
        imageArea:{
            height:'30%',
            marginTop: '20%'
        },
        messageArea:{
            height:'30%',
        },
        buttonArea:{
            height:'20%',
        }

    })
    function QuebrarBiscoito(){
        setImage(require('./src/biscoitoAberto.png'))
        setMensagem(frases[Math.floor(Math.random() * (frases.length))])
    }

    function Reset(){
        setImage(require('./src/biscoito.png'))
        setMensagem('')
    }

    return(
        <View style={styles.container} >
            <View style={styles.imageArea}>
            <Image 
            source={image}
            style={styles.image}
            />
            </View>
            <View style={styles.mensagemArea}>
            <Text style={styles.text}>{mensagem}</Text>
            </View>
            <View style={styles.buttonArea}>
            <TouchableOpacity 
            style={styles.button}
            onPress={QuebrarBiscoito}
            >
                <Text style={styles.buttonText}>Quebrar Biscoito</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={styles.resetButton}
            onPress={Reset}
            >
                <Text style={styles.buttonText}>Resetar</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default App