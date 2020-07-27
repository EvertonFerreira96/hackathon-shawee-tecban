import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {MaterialIcons, } from '@expo/vector-icons'

import { StatusBar, FlatList, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions, } from 'react-navigation';

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';


export default class SignIn extends Component {
  
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
    error: '',
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSignInPress = async () => { 
    this.props.navigation.navigate('Home');
  };

  render() {
    const data = [
      {nome: 'account-balance', id: 1, lib: MaterialIcons, size:70,description: 'Banco Crédito'},
      {nome: 'account-balance', id: 1, lib: MaterialIcons, size:70,description: 'Banco Crédito'},
      {nome: 'account-balance', id: 1, lib: MaterialIcons, size:70,description: 'Banco Crédito'},
      {nome: 'account-balance', id: 1, lib: MaterialIcons, size:70,description: 'Banco Crédito'},
      {nome: 'account-balance', id: 1, lib: MaterialIcons, size:70,description: 'Banco Crédito'},
      {nome: 'account-balance', id: 1, lib: MaterialIcons, size:70,description: 'Banco Crédito'},
      ]
    return (
      <Container>
        <StatusBar hidden />  
         <FlatList 
          horizontal={false} 
          data={data}
          style={{flex:1, marginTop:50}}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item})=> (
          <>
            <View style={{padding:0, justifyContent:'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.props.navigate('bank')} style={{padding:15, justifyContent:'center', alignItems: 'center'}}>
                <MaterialIcons name={item.nome} size={item.size} />
                <Text style={{color: '#000'}}>{item.description}</Text>   
              </TouchableOpacity>
            </View>
          </>
          )}

        />
      </Container>
    );
  }
}