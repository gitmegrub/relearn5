import React, {Component} from 'react';
import {
	Platform
	, StyleSheet
	, Text
	, View
	, TextInput
  	, KeyboardAvoidingView
  	, TouchableOpacity
  	, AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		username: '',
  		password: '',
  	}
  }

  componentDidMount() {
  	this._loadInitialState().done();
  }

  _loadInitialState = async () => {
  	var value = await AsyncStorage.getItem('user');
  	if (value !== null) {
  		this.props.navigation.navigate('Profile');
  	}
  }

  render() {
    return (
    	<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
    		<View style={styles.container}>

    			<Text style={styles.header}>LOGIN</Text>

    			<TextInput
	    			style={styles.textInput} 
	    			placeholder='Username'
	    			onChangeText={ (username) => this.setState({username}) }
	    			underlineColorAndroid='transparent'
    			/>

    			<TextInput
	    			style={styles.textInput} 
	    			placeholder='Password'
	    			onChangeText={ (username) => this.setState({password}) }
	    			underlineColorAndroid='transparent'
    			/>

    			<TouchableOpacity
    				style={styles.loginBtn}
    				onPress={this.login}>
    				<Text>Log in</Text>
    			</TouchableOpacity>
    		</View>
    		
      	</KeyboardAvoidingView>
    );
  }

  login = () => {
  	alert('wew');
  }
}

const styles = StyleSheet.create({
  wrapper: {
  	flex: 1
  }

  , container: {
  	flex: 1
  	,alignItems: 'center'
  	,justifyContent: 'center'
  	,backgroundColor: 'lightblue'
  	,paddingLeft: 40
  	,paddingRight: 40
  }

  , header: {
  	fontSize: 23
  	,marginBottom: 60
  	,color: 'mediumorchid'
  	,fontWeight: 'bold'
  }

  , textInput: {
  	alignSelf: 'stretch'
  	,padding: 16
  	,marginBottom: 20
  	,backgroundColor: '#ffffff'
  }

  , loginBtn: {
  	alignSelf: 'stretch'
  	,backgroundColor: 'mediumorchid'
  	,padding: 20
  	,alignItems: 'center'
  }
});