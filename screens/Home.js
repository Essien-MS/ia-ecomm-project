import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

export default function Home({navigation}){
    return <View style={{flex: 1,flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <View style = {{marginBottom: 10}}><Text style={{fontWeight: 'bold', fontSize: 40}}>Interim Assessment</Text></View>
        <View style = {{marginBottom: 10}}><Text style={{fontWeight: 'bold', fontSize: 30}}>E-Commerce</Text></View> 
        <View style = {{marginBottom: 30}}><Text style={{fontWeight: 'bold', fontSize: 20}}>Project Work</Text></View> 
        <TouchableOpacity 
        onPress={()=>{navigation.navigate("Login")}} 
        style={{
            backgroundColor: 'red', 
            borderRadius: 10, 
            padding: 10, 
            paddingHorizontal: 30, 
            marginBottom: 10}}>
                <Text>Login Page</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>{navigation.navigate("Cart")}} 
        style={{
            backgroundColor: 'orange', 
            borderRadius: 10, 
            padding: 10, 
            paddingHorizontal: 40}}>
                <Text>Cart Page</Text>
        </TouchableOpacity>
        
    </View>
}