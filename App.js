import * as React from "react"
import Registro from "./screens/Registro"
import Logar from "./screens/Logar"
import ScreenChat from "./screens/ScreenChat"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from 'firebaseConfig'
const auth = getAuth();
const stack=createStackNavigator()
const StackNavigator=()=>{
  return(

    <stack.Navigator
      initialRouteName='ScreenChat'
      screenOptions={{
      headershown:false,
      gestureEnabled:false,
      }}
      >
      <stack.Screen name="Logar" component={Logar}/>
      <stack.Screen name="Registro" component={Registro}/>
      <stack.Screen name="ScreenChat" component={ScreenChat}/>

      </stack.Navigator>

  )
}
onAuthStateChanged(auth, (user) => {
  if (user) {const uid = user.uid;} else {
  }
});

signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })

export default class App extends React.Component{

  render(){
    return(
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>

    );
  }
}


