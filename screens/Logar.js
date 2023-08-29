import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, TextInput,ImageBackground,Alert } from 'react-native';
import firebase from 'firebase/app'
import firebaseConfig from "../firebaseConfig"
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(app);


export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:"",
      userSignedIn:false,

    }
  }
  createUserWithEmailAndPassword = async (auth, email, password) =>{
    firebase
    .auth()
    
    .then ((userCredential) => {
      const user = userCredential.user;
    })

    .catch ((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });
  }
  signIn=async(email,password)=>{
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(()=>{
        this.props.navigation.replace('Chat')
      })
      .catch(error=>{
       Alert.alert(error.message)
      })
  }
  
    gotoRegister=()=>{
      this.props.navigation.navigate('Registro')
    }

  render(){

    const{email,password}=this.state
    return(

        <View style={style.telafundo}>
          <ImageBackground source={require('../assets/discord-gaming-community-vector-8bj6he46773yglph.jpg')}style={style.discord}>
        <View style={style.fundo}>

        <Text style={style.criarConta}> Criar uma conta </Text>

        <Text style={style.texto}> e-mail </Text>

        <TextInput 
        style={style.email}
        onChangeText={text=>this.setState({
          email:text
        })}
        />
          <Text style={style.texto}> senha </Text>
        <TextInput
         style={style.senha}
         onChangeText={text=>this.setState({
           password:text
         })}
         secureTextEntry
         />

        <TouchableOpacity>
          <Text style={style.botaodetexto}>esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} >
          <Text style={style.textobutao}> entrar </Text>
        </TouchableOpacity>

        <View>
          <Text style={style.precisadeconta}> precisa de uma conta?</Text> 

          <TouchableOpacity onPress={this.gotoRegister}> 
            <Text style={style.registro}> registrar-se </Text>
          </TouchableOpacity>

        </View>

         </View>  
          </ImageBackground>
        </View>
    )
  }
}

const style = StyleSheet.create({

  registro:{
 color:'#696969'
  },

  precisadeconta:{
    color:'#1E90FF',

  },

botaodetexto:{
  color:'#1E90FF',
  marginLeft:10,

},

  criarConta:{
    color: '#ffffff',
    marginTop:20,
    fontWeight:'bold',
    alignSelf: 'center',
    fontSize: 25,

  },

  discord:{
    width: "100%",
    height: "100%",
    alignItems:"center",
    justifyContent: "center",

  },
  
  telafundo:{
    backgroundColor: '#2681EB',
    flex:1,
    justifyContent: "center",
    alignItems: "center",

  },
  fundo:{
    backgroundColor:'#0F0F0F',
    width: 500,
    height: 380,
    alignSelf:"center",
    justifyContent: "center",
    borderRadius: 6,

  },

  textobutao:{
    alignSelf:'center',
    justifyContent:'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'

  },

  texto:{
   color: '#ffffff', 
   marginLeft: 9,
   marginTop: 15,
   fontWeight: 'bold',

  },

  botao:{
    backgroundColor:'#2681EB',
    width: 480,
    height: 40,
    margin:19,
    alignSelf: 'center',
    borderRadius: 4,

  },

  email:{
   backgroundColor:'#313030',
   width: 480,
   height: 35,
   alignSelf: 'center',
   borderRadius: 4,
   
  
   },
    
   senha:{
    backgroundColor: '#313030',
    width: 480,
    height: 35,
    alignSelf: 'center',
    borderRadius: 4,

   },
})