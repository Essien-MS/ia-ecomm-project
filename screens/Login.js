import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, ImageBackground, ScrollView, Dimensions } from 'react-native';


export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={{flex: 1,backgroundColor: 'white'}}>
       <ScrollView> 
      <ImageBackground
        source={{uri: 'https://images.unsplash.com/photo-1584061606850-a57652a323a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVuZGVyd2VhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'}}
        style={{
          height: 108
          
        }}><View style={{alignItems:'center', justifyContent: 'center', marginTop: 30}}><Text style={{fontSize: 40, fontWeight:'bold',color: 'white'}}>Flormens</Text></View></ImageBackground>
    <View style={styles.bottomView}>
      <View style={{padding: 10}}>

      </View>
    </View>
    <View style={styles.container}> 
        <Text style={styles.logo}>User Login</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{
          marginTop: 80
        }}><Text>Don't have an account?<TouchableOpacity
        >
          <Text style={{color: '#eb9694', fontFamily: 'Ubuntu'}}>Signup</Text>
        </TouchableOpacity></Text></View>
            
                  
      
        

       </View>
       </ScrollView> 
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"#eb9694",
    marginBottom:20
  },
  inputView:{
    width:"80%",
    backgroundColor: '#d4d9e0',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"50%",
    backgroundColor:"#eb9694",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom: 10,
  },
  loginText:{
    color:"gray"
  },
  bottomView:{
    flex: 1.5,
    backgroundColor: 'white',
    bottom: 20,
    borderTopStartRadius: 80,
    borderTopEndRadius: 80,
  }
});