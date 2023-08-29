import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,TextInput,ImageBackground,CheckBox,Alert }from 'react-native';
import firebase from 'firebase/app';
import {firebaseConfig} from "../firebaseConfig"

export default class Register extends React.Component{
  gotoLogin=()=>{
      this.props.navigation.navigate('Logar')
    }
  constructor(props){

    super(props)
    
    this.state = {
     name:"",
     email:"",
     password:"",
     confirmPassword:"",
     checkBox:false,
     
    };
  
  }
  registerUser=(name,email,password,confirmpassword)=>{
    if(password==confirmpassword){
      firebase
        .auth
        .createUserWithEmailAndPassword(email,password)
        .then((userCredential)=>{
          Alert.alert("usuário cadastrado")
          this.props.navigation,replace("Login")
          firebase.database().ref("/users/"+userCredential.user.uid)
            .set({
              email:userCredential.user.email,
              name:name
            })
        })
        .catch(error=>{
          Alert.alert(error.message)

        })
    }
    else{
      Alert.alert("as senhas não são iguais")
    }
  }
  render(){
    const {email,name,password,confirmPassword}=this.state
    return(
        <View style={style.telafundo}>
        <ImageBackground source={require('../assets/discord-gaming-community-vector-8bj6he46773yglph.jpg')}style={style.discord}>
      <View style={style.fundo}>
        <View style={style.ajuste}>
          <Text style={style.criarConta}> Criar uma conta </Text>


          <Text style={style.textoEmail}> e-mail </Text>
          <TextInput 
          style={style.email}
          onChangeText={text=>this.setState({email:text})}
          />

          <Text style={style.textoNomeDeUsuario}> nome de usuario </Text>
          <TextInput
           style={style.usuario}
           onChangeText={text=>this.setState({name:text})}
           />

          <Text style={style.textoSenha}> senha </Text>
          <TextInput style={style.senha}
          onChangeText={text=>this.setState({password:text})}
          />
          <Text style={style.textoComfirmarSenha}>Comfirmar Senha</Text>
          <TextInput
           style={style.comfirmarSenha}
          onChangeText={text=>this.setState({confirmPassword:text})}
           />
        </View>

        <View style={style.pos}>

         <View style={style.textoDaCaixa}>
        
            <View style={style.espacoDaCaixa}>  

                    <CheckBox style={style.caixa}/>

            </View>
                
                    <View style={style.espacoDoTexto}>

        <Text style={style.textocheck}>
        Tudo bem me mandar e-mails com atualizações do Discord, dicas e ofertas especiais. Você pode mudar isso a qualquer momento. 
        </Text>

                      </View>

                      </View>

        <TouchableOpacity style={style.botao}onPress={() => this.registerUser(email, name, password, confirmPassword)}>
          <Text style={style.textobutao}> confirme </Text>
        </TouchableOpacity>
        </View>

 

<View style={style.dataMesAno}>
  
            </View>

           

         </View>  
         </ImageBackground>
        </View>
    )
  }
}

const style = StyleSheet.create({
  textoSenha:{
  marginLeft:30,
    color:'#ffffff',
},
  textoNomeDeUsuario:{
  marginLeft:30,
  color:'#ffffff',
},

  textoEmail:{
  marginLeft:30,
  color:'#ffffff',
},
  
ajuste:{
  marginTop:-330
},

textocheck:{
  color:"#ffffff",
  textAlign:"justify"

},

espacoDoTexto:{
  width:250,

}, 

espacoDaCaixa:{
  marginLeft: 35,
  marginRight: 8,

},

textoDaCaixa:{
  flexDirection:"row",
  marginTop: 30,

},

dataMesAno:{
  flexDirection:"row",
  width: 100,
  marginTop:-390,
  marginLeft:45,   

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
  width:"100%",
  justifyContent: "center",
  alignItems: "center",

},
fundo:{
  backgroundColor:'#0F0F0F',
  width: 360,
  height: 500,
  alignSelf:"center",
  justifyContent: "center",
  borderRadius: 6,

},

textobutao:{
  alignSelf:'center',
  justifyContent:'center',

},

botao:{
  backgroundColor:'#2681EB',
  width: 290,
  height: 40,
  margin:25,
  alignSelf: 'center',
  borderRadius: 4,

  },

email:{
  backgroundColor:'#313030',
  width: 290,
  height: 35,
  alignSelf: 'center',
  borderRadius: 4,
  color: "white",
  
},
usuario:{
  backgroundColor: '#313030',
  width: 290,
  height: 35,
  alignSelf: 'center',
  borderRadius: 4,
  color: "white",

},
senha:{
  backgroundColor: '#313030',
  width: 290,
  height: 35,
  alignSelf: 'center',
  borderRadius: 4,
  color: "white",

},
comfirmarSenha:{
  backgroundColor: '#313030',
  width: 290,
  height: 35,
  alignSelf: 'center',
  borderRadius: 4,
  color: "white",
  
},
textoComfirmarSenha:{
  color:"#ffffff",
  width:170,
  height:25,
  marginLeft:35
 
}
  })