import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import 'firebase/auth';

import firebase from './src/firebaseConnection';

console.disableYellowBox=true

export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');


  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then( (value) => {
      alert('Bem vindo! '+value.user.email)
      setUser(value.user.email)
    })
    .catch((error) => {
        alert('Ops algo deu errado!');
        return;
    })

    setEmail('')
    setSenha('')
  }

  async function deslogar(){
    await firebase.auth().signOut();
    setUser('');
    alert('Deslogado -- até mais!!!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email:</Text>
      <TextInput
      style={styles.input}
      value={email}
      onChangeText={(texto) => setEmail(texto)}
      />
      
      <Text style={styles.texto}>Senha:</Text>
      <TextInput
      style={styles.input}
      value={senha}
      onChangeText={(texto) => setSenha(texto)}
      />

      <Button
      title='Adicionar'
      onPress={logar}
      /> 

      <Text style={{marginTop:20, fontSize:17, textAlign:'center', marginBottom:30}}>{user}</Text>
      
      {user.length > 0 ? //se tiver um user execulta o botão
        (
          <Button
          title='deslogar'
          onPress={deslogar}
          />
        ) ://se não tiver user mostra a msg
        (
          <Text style={{marginTop:20, fontSize:17, textAlign:'center', marginBottom:30}}>Nenhum usuario está logado</Text>
        )
      }
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 40
  },
  texto:{
    fontSize:19,
    fontWeight:'bold'
  },
  input:{
    borderWidth: 1,
    fontSize: 17,
    paddingLeft: 17,
    paddingVertical:10,
    marginBottom:17
  }

});