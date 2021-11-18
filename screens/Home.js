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

            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}><Text style={{fontSize: 30, fontWeight: 'bold'}}>Girls Panties</Text></View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'data:image/jpeg;base64,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'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'data:image/jpeg;base64,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'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTn6fuwiMfyGqV9LWEmDM_aJfMFlwA1ayjw&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRct9-QEq9olZ_brCfQbct2E0bUa8kUgpLQ7Q&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcahFYur8F7v2Lq4L7w0MsnAPB5jd2sa1_Q&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://cdn.thewirecutter.com/wp-content/media/2021/07/periodunderwear-2048px-9311.jpg?auto=webp&quality=75&width=1024'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://www.chatelaine.com/wp-content/uploads/2018/02/undies-810x608.jpg'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_12/1690797/underwear-main-khu-210322.jpg'}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}><Text style={{fontSize: 30, fontWeight: 'bold'}}>Men Singlet</Text></View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://cdn11.bigcommerce.com/s-rxzabllq/products/1983/images/20445/Mens-Mini-Waffle-Knit-Quick-Dry-Plain-Singlets-Online__53350.1579506257.480.480.jpg?c=2'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://cdn11.bigcommerce.com/s-rxzabllq/products/734/images/18757/Wholesale_Plain-mens-tank-top-black__51607.1570801712.480.480.jpg?c=2'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNU2n49evOoQlHRI_81HSUrjAl4KcaPTC1qO5fJI5aArBBlaMczp_muGuxcqaHN-6Hio&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFEb7BJ4dsgbRNhxdg5_O8vnmtphknPwzSk4GTrZpxl5cGkrA55fk5NhggCUhJZzTY0k&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://www.worksafety.co.nz/image/cache/data/product_images/Apparel_Online/Product%20Images/Aussie_Pacific/eureka_singlet/eureka_men_singlet-5-800x1000.jpg'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4t8_QbWNMSDu5k0MRcg1JLvm2kYnlIwnBFwICGqkguNGbzj9gHx_fF_MJ02P7pHnk_E&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHtglyutNled01z6eV5zuEXewpIDVGObCIWzlvRBo81V1bjBVIoHOx5LcNODr9CnYUps&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwa7-H5jjmRldfIt2pqdL8OwXFJgLAA9fqdZTNUGd7Bobym73WlkyjphhzMCvIE-ckdx4&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}><Text style={{fontSize: 30, fontWeight: 'bold'}}>Girls Bra</Text></View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-U8ICYofpW9kzF6KnbOb-EWFSl2-XQ-uVwZPItFtJC39uTk7IyQifjAvBDmhie__3VE&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74eVi1SbvC24XkFZigvY_ZELebjrykCIEp-KTLqA4xsZ12ujQS2mCBnQZgPC1dEWCD7c&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfZOmvqtej2JrztMrkuOH-8OQIcjtCK2M5VOyFYU9iNKqv7T8EQ0P6mMJBdUB7VMfdJE&usqp=CAU'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://matalan-content.imgix.net/uploads/asset_file/asset_file/262655/1585639641.1302679-S2762589_C323_Alt1.jpg?ixlib=rails-2.1.4&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=736&h=1030&fit=crop&dpr=1&s=12e7c3321eaf32d1c0475ffdafef44ca'}}>

                        </Image>
                    </TouchableOpacity>
    
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://image.made-in-china.com/202f0j00lerfUKPIqgkR/Ladies-Underwear-Triangle-Cup-No-Steel-Ring-Bra-Girl-Small-Bra-Thin-Modal-Cotton-Sexy.jpg'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://cdn.ssactivewear.com/Images/Style/5994_fm.jpg'}}>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://m.media-amazon.com/images/I/712mLuJWvCL._SL1500_.jpg'}}>

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

        
           