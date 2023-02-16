import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Platform, 
  Image, 
  ImageBackground,
  TouchableOpacity, 
  Switch,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Pato from './pato.jpg'
import Fundo from './background.jpg'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: ''
    }

    this.state={
      isEnabled: false
    }
  }

  mudouMensagem = msg => {
    this.setState({ mensagem: msg });
  }

  render() {
    const { mensagem } = this.state

    return (
      <ImageBackground source={Fundo} style={styles.container}>
        {Platform.OS === 'android' ? (
          <Text>Android</Text>
        ) : (
          <Text style={styles.text}>FIAP</Text>
        )}
        <Text style={[styles.text, styles.textColor]}>portal do aluno</Text>
        <TextInput
          placeholder='Login'
          style={styles.textInput}
          onChangeText={this.mudouMensagem}
        />
        <TextInput
          placeholder='Password'
          style={styles.textInput}
        />
        <Image 
          source={{uri: "https://th.bing.com/th/id/OIP.gfLE2cHBTq1LkqpD6Q0_NwHaE7?pid=ImgDet&rs=1"}}
          style={styles.image}
        />
        <Image
            source={Pato}
            style={styles.image}
        />
        <Button
          title="Clique-me"
          onPress={() => alert(mensagem)}
          color="red"
        />
        <TouchableOpacity onPress={()=> alert('Esqueci minha senha')} activeOpacity={0.05} >
          <Text style={styles.textButton}> Esqueci minha senha</Text>
        </TouchableOpacity>
        <Switch
          value={this.state.isEnabled}
          onValueChange={()=>this.setState({isEnabled: !this.state.isEnabled})}
          thumbColor='#000'
          trackColor={{false: '#292', true:'#938'}}
        />        
        {this.state.isEnabled ? (        
          <ActivityIndicator color='#FFF8DC' size='large' style={{marginTop:10}}/>         ) : <></> }
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    ...Platform.select({
      ios: {
        color: 'red'
      },
      android: {
        color: 'green'
      }
    })
  },
  textColor: {
    color: 'gray'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    width: 200,
    color: 'black'
  },
  image:{
    width: 100,
    height:80
  },
  textButton:{
    fontSize: 15,
    color: '#fff'
  }
});

