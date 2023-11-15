import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Database from './Database';
 
export default function AppForms({route, navigation}) {

  const id = route.params ? route.params.id : undefined;
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    if(!route.params) return;
    setDescricao(route.params.descricao);
    setQuantidade(route.params.quantidade.toString());
  }, {route})

  function mudancaDescricao(descricao){
    setDescricao(descricao);
  }

  function mudancaQuantidade(quantidade){
    setQuantidade(quantidade);
  }

  async function pressionarBotao(){
    const listItem = {descricao, quantidade:parseInt(quantidade)};
    Database.saveItem(listItem)

    .then(response => navigation.navigate("AppList", listItem));
  }
  
  return(
    <View>
      <TextInput 
        style={styles.input}
        onChangeText={mudancaDescricao}
        placeholder="O que está faltando em casa?"
        clearButtonMode='always'></TextInput>

      <TextInput 
          style={styles.input}
          onChangeText={mudancaQuantidade}
          placeholder="Digite a quantidade"
          keyboardType={'numeric'}
          clearButtonMode='always'>
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={pressionarBotao}>

          <Text style = {styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});