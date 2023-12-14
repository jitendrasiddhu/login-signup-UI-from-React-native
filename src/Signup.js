import React from 'react';
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import Field from './Field';
import Btn from './Btn';

const Signup = (props) =>{
    return(
        <View style={{alignItems: 'center', width:420}}>
        <Text
          style={{
            color: '#4287f5',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: '#4287f5',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: 'darkGreen', fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditions
            </Text>
          </View>
  
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: 'darkGreen', fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor='#0080ff'
            btnLabel="Signup"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: '#0080ff', fontWeight: 'bold', fontSize: 20}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}
const style = StyleSheet.create({})

export default Signup;
