import React from 'react';
import {View,TouchableOpacity,Text, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Home({navigation}){
    return <View style={{flex: 1, backgroundColor: 'white'}}>
               
        <View style={{flexDirection: 'row',backgroundColor: 'gray',justifyContent: 'space-between',borderRadius: 5, margin: 5 }}>
            <View><Text style={{fontSize: 30, fontWeight: 'bold', marginHorizontal: 20, color: 'white'}}>Explorer</Text></View>
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
        <View style={{flex: 1}}>
            <Image 
            source={{uri: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
            style={{height: 400}}>

            </Image>
        </View>

        <View style={{flex:1}}><View style={{ flex: 1,alignItems: 'center',justifyContent: 'center', marginVertical: 20}}><Text style={{fontWeight: 'bold'}}>SHOP WIGS</Text></View>

        <View>
            
            <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1613316114854-d27d2eea0191?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1573617868130-7e757dbad187?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10,borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1626108870272-eff10b2b6cd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
               
            </View>

            <View style={{flexDirection: 'row', marginTop: 12}}>
            <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1595888433198-fc3fba4d48e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1614794201931-f3e76c26e725?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1608877607386-8698047d65a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
                
            </View>
            </View>
        </View>
        

        </View>
        <View style={{flex:1}}><View style={{ flex: 2, alignItems: 'center',justifyContent: 'center',marginTop: 20}}><Text style={{fontWeight: 'bold'}}>SHOP CLOTH</Text></View>

        <View style={{}}>
            
            <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20}}>
            <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1613316114854-d27d2eea0191?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1573617868130-7e757dbad187?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1626108870272-eff10b2b6cd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
            </View>

            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1595888433198-fc3fba4d48e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1614794201931-f3e76c26e725?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1608877607386-8698047d65a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
                
            </View>
            </View>
        </View>
        

        </View>

        <View style={{flex:1}}><View style={{ flex: 2, alignItems: 'center',justifyContent: 'center',marginTop: 20}}><Text style={{fontWeight: 'bold'}}>SHOP CLOTH</Text></View>

        <View style={{}}>
            
            <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20}}>
            <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1613316114854-d27d2eea0191?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1573617868130-7e757dbad187?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1626108870272-eff10b2b6cd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
            </View>

            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1595888433198-fc3fba4d48e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1614794201931-f3e76c26e725?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: 'https://images.unsplash.com/photo-1608877607386-8698047d65a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
                
            </View>
            </View>
        </View>
        

        </View>
        
     </ScrollView>   
    </View>
    
}