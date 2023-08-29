import *as React from "react"
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ImageBackground,FlatList} from "react-native";
const DATA=[
    {id:"ejeTc7ii6MFVSD4RpXsItddpmkBR19Pc",
      title:'title'
    },
    {id:"N7v7cttgM4Dlu2NzGJLhVkhUyLc92YUZ",
      title:'title'
    },
    {id:"XGBc4IgArGz2Q9j3EvoebwYcktl0riFc",
      title:'title'
    },
    {id:"FqkAuNHYhra90k6TSHofkuoTTPOJm5tO",
      title:'title'
    },
    {id:"LKE41Hpc66V8GfcbUPcP3ToQuRHjBAr5",
      title:'title'
    },
  ]
  const Item=({title})=>(
    <View style={style.cardIntero}>
       
        <View style={style.nomeDeUsuario}>

            <Text style={style.barrasDeTexto}>davi</Text>

        </View>
        <Text style={style.estiloDoTitulo}>title</Text>
       
    </View>


  )
export default class ScreenChat extends React.Component{
    gotoLogin=()=>{
        this.props.navigation.navigate('Logar')
      }
    render(){
        return(

            <View style={style.fundo}>
                <View style={style.telaDoX}>
                    <TouchableOpacity style={style.fecharX}>
                        <Text style={style.configuraçaoDoX}>X</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => 
                        <Item title={item.title} />
                    }
                    keyExtractor={item => item.id}
                />
                <View style={style.areaMensagem}>
                    <TextInput style={style.barraDeMensagem}/>
                    <TouchableOpacity style={style.botaoEnviar}onPress={this.gotoLogin()}>
                        <Text style={style.textoDoBotao}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
        )
    }
}
const style = StyleSheet.create({
fundo:{

    backgroundColor:"#000000",
    flex: 1,
    justifyContent:"center",

     
},
barrasDeTexto:{
    fontSize:'15px',
    fontWeight:"bold",
    paddingLeft:10,
    

},
nomeDeUsuario:{
    height:'55%',
    width:'35%',
    backgroundColor:'#1E90FF',
    borderRadius:20,

},
cardIntero:{
    backgroundColor:"#4F4F4F",
    borderRadius:10,
    alignSelf:'center',
    width:'45%',
    margin:10,
    

},
estiloDoTitulo:{
    paddingLeft: 10,

},
botaoEnviar:{
     height:'25%',
     width:'35%',
     backgroundColor:'#1E90FF',
     alignSelf:"center",
     borderRadius: 8,
     marginTop:7,

},
barraDeMensagem:{
    height: '60%',
    borderRadius: 8,
    backgroundColor:"#4F4F4F",
    

},
areaMensagem:{
    alignSelf:"center",
    width:'99%',
    height:"15%"
},
textoDoBotao:{
    alignSelf:"center",

},
fecharX:{
    width:'6%',
    height:"25%",
    backgroundColor:"red",
    borderRadius:4,
    justifyContent:"center",
    marginTop:"2%",
    marginRight:"2%",

},
telaDoX:{
    height:'15%',
    width:'100%',
    alignItems:"flex-end",


},
configuraçaoDoX:{
    textAlign:"center",
    color:'#ffffff',
    justifyContent:"center",
    fontWeight:"bold",



},

})