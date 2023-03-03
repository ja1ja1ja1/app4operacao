import React,{useState} from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity 
  } from 'react-native';

//text:adicionar texto
//view: abrir uma janela
//textinput: fazer os formulários


export default function App() {
  const[num1,setNum1] = useState('');
//useState verifica se está vazio ou cheio
  const[num2,setNum2] = useState('');

  function soma(){
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert('O resultado é: ' + resultado)
  }
  function mult(){
    const resultado = parseFloat(num1) * parseFloat(num2);
    alert('O resultado é: ' + resultado)
  }
  function sub(){
    const resultado = parseFloat(num1) - parseFloat(num2);
    alert('O resultado é: ' + resultado)
  }
  function div(){
    const resultado = parseFloat(num1) / parseFloat(num2);
    alert('O resultado é: ' + resultado)
  }
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Soma de valores</Text>
    <TextInput 
    style={styles.input0} 
    keyboardType='numeric' 
    placeholder="Digite um número"
    onChangeText={(primeiro)=>setNum1(primeiro)}
    />
    <TextInput 
    style={styles.input1} 
    keyboardType='numeric' 
    placeholder="Digite um número"
    onChangeText={(segundo)=>setNum2(segundo)}
    />
    <TouchableOpacity style={styles.btn} onPress={soma}>
      <Text style={styles.titulobtn}>Soma</Text>
    </TouchableOpacity><TouchableOpacity style={styles.btn} onPress={mult}>
      <Text style={styles.titulobtn}>Multiplicar</Text>
    </TouchableOpacity><TouchableOpacity style={styles.btn} onPress={sub}>
      <Text style={styles.titulobtn}>Subtrair</Text>
    </TouchableOpacity><TouchableOpacity style={styles.btn} onPress={div}>
      <Text style={styles.titulobtn}>Dividir</Text>
    </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input0: {
    backgroundColor:'#ffaa33',
    borderRadius:15,
    margin:30,
    padding:10,
    fontSize:30,
    textAlign:'center'
      },
      input1:{
        backgroundColor:'#a3b567',
        borderRadius:15,
        margin:35,
        padding:10,
        fontSize:30,
        textAlign:'center'
      },
      btn: {
        alingItems:'center',
        backgroundColor:"#ff0000",
        margin:35,
        borderRadius:10,
        padding:15
      },
      titulobtn:{
        textAlign:'center',
        fontSize:25,
        color:"#fff"
      }
});
