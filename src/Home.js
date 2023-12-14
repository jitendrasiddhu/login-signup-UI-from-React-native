import React from "react";
import { View, StyleSheet, Text , Image} from "react-native";

import Btn from "./Btn";

const Home = (props) =>{
    return (
        <View style={{ marginHorizontal: 40,}}>
        <Image source={{uri: 'https://cdn.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.webp'}}
         style={{width: 340, height: 300,marginTop:15}} />

        <Text style={{ color: 'black', fontSize: 64 }}>Attendance</Text>

        <Text style={{ color: 'black',textAlign:'center', fontSize: 64, marginBottom: 40 }}>App</Text>
        
        <Btn bgColor='yellowgreen' textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
        <Btn bgColor='yellowgreen' textColor='white' btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
        </View>
    )
}

const style = StyleSheet.create({})

export default Home;