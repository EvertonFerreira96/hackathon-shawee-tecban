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


export default class Home extends Component {
  
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

  handleHomePress = async () => { 
    this.props.navigation.navigate('Home');
  };

  handleBankInPress () { 
    this.props.navigation.navigate('Bank');
  };

  render() {
    const data = [
      {nome: 'computer', id: 1, lib: MaterialIcons, size:70,description: 'Controle Pessoal'},
      {nome: 'account-balance', id: 1, lib: MaterialIcons, size:70,description: 'Crédito Facilitado'},
      {nome: 'attach-money', id: 1, lib: MaterialIcons, size:70,description: 'Investimentos'},
      {nome: 'perm-data-setting', id: 1, lib: MaterialIcons, size:70,description: 'Painel Financeiro'},
      {nome: 'collections-bookmark', id: 1, lib: MaterialIcons, size:70,description: 'Conhecendo o aplicativo'},
      {nome: 'settings', id: 1, lib: MaterialIcons, size:70,description: 'Configurações'},
      ]
    return (
      <Container>
        <StatusBar hidden />  
         <FlatList 
          horizontal={false} 
          data={data}
          numColumns={2}
          style={{flex:1, marginTop:50}}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item})=> (
          <>
            <View style={{minWidth:150, maxWidth:150,justifyContent:'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.handleBankInPress()} style={{justifyContent:'center', alignItems: 'center'}}>
                <MaterialIcons name={item.nome} size={item.size} />
                <Text style={{color: '#000', flex: 1, textAlign: 'center',}}>{item.description}</Text>   
              </TouchableOpacity>
            </View>
          </>
          )}

        />
      </Container>
    );
  }
}