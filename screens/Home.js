import React from 'react';
import {View,TouchableOpacity,Text, ScrollView, Image, SafeAreaView,FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
  

export default function Home({navigation}){

    return <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
               
        <View style={{flexDirection: 'row',backgroundColor: 'gray',justifyContent: 'space-between',borderRadius: 5, margin: 5, width: '100%', height: '10%', alignItems: 'center'}}>
            <View style={{justifyContent: 'center'}}><Text style={{fontSize: 30, fontWeight: 'bold', marginHorizontal: 20, color: 'white'}}>Flormens Collection</Text></View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginHorizontal: 25,marginVertical: 15}}>
                    <Ionicons name="search" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 25,marginVertical: 15}}>
                    <Octicons name="settings" size={24} color="white" />
                </TouchableOpacity>
                
            </View>

                       
        </View>

        <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}><Text style={{fontSize: 30, fontWeight: 'bold'}}>Men boxers</Text></View>
            <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10, backgroundColor: '#eee'}} source={{uri: 'https://thumbs.dreamstime.com/b/gray-striped-blue-men-boxer-shorts-wooden-background-140540046.jpg'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10, backgroundColor: '#eee'}} source={{uri: 'https://cf.shopee.sg/file/f20c5afbee4cdfc8d3bd95a0c7b79478'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10, backgroundColor: '#eee'}} source={{uri: 'https://media.gq.com/photos/590785a8eb1feb7c1b66dcfd/master/w_320%2Cc_limit/0214-GQ-FAUN03.04.jpg'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10, backgroundColor: '#eee'}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_YZGpPRaF9UsdViKe3_jqdhqk4gR3T-JJawUP5qmubenAw8DAbPe06bDdxTyNxFUzcM&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://stylegirlfriend.com/wp-content/uploads/2018/07/mack-weldon-boxer-briefs-copy-1024x654.png'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://s.yimg.com/uu/api/res/1.2/1KLLg_8gUAJTLyjA3QNyxg--~B/aD02MDA7dz0xMDY5O2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-US/homerun/health_338/d976678419d74ccf30293f31a458c046'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzPjPvc7mG7UgJuv7FBKVLL54Me_vD3c8Zne1b6XcJz11OoT_J71WOn8HIZ79R80PU8Y&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.gq-magazine.co.uk/photos/60215c3afc954a7c0aefcfca/master/pass/080221_Undies_HP.jpg'}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}><Text style={{fontSize: 30, fontWeight: 'bold'}}>Female underwears</Text></View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: ''}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            </View>
        </ScrollView>
    
        </View>
}

        
           