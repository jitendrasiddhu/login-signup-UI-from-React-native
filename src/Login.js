import React from 'react';
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import Field from './Field';
import Btn from './Btn';

const Login = (props) =>{
    return(
        <View style={{alignItems: 'center', width: 420}}>
        <Text
          style={{
            color: '#4287f5',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: 'black', fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end',paddingRight: 16, marginBottom: 100}}>
            <Text style={{color: '#0080ff', fontWeight: 'bold', fontSize: 20}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={'#0080ff'} btnLabel="Login" Press={() => alert("You are successfully logged in")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: '#4287f5', fontWeight: 'bold', fontSize: 20 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}
const style = StyleSheet.create({})

export default Login;
