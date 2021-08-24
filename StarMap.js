import React, {Component} from 'react';
import {Text,View,SafeAreaView,StyleSheet,TouchableOpacity,StatusBar,Platform,ImageBackground,Image, TextInput} from 'react-native'
import {WebView} from 'react-native-webview'

export default class StarMapScreen extends Component{
    constructor() {
        super();
        this.state = {
            latitude:'',
            longitude:''
        }
    }
    render(){
        return(
            <View style={{backgroundColor:"purple",justifyContent:"center"}}>
              <SafeAreaView style = {styles.droidSafeArea}/>
              <View style={styles.titleBar}>
                <Text style={styles.titleText}>Star Map</Text>
              </View>

              <TextInput 
                style={{height:40, borderColor:"gray", borderWidth:1}}
                placeholder="Enter latitude"
                placeholderTextColor="#ffff#000000"
                onChangeText={(text)=>{
                    this.setState({
                        latitude:text
                    })
                }}
              />

              <TextInput 
                style={{height:40, borderColor:"gray", borderWidth:1}}
                placeholder="Enter longitude"
                placeholderTextColor="#ffff#000000"
                onChangeText={(text)=>{
                    this.setState({
                        longitude:text
                    })
                }}
              />
              <WebView
                   scalesPageToFit={true}
                   source={{uri:path}}
                   style={{marginTop:20,marginBottom:20}}
              />
            </View>

        )
    }
}

const {longitude,latitude} = this.state;
const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'

const styles = StyleSheet.create({
    droidSafeArea:{
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0
    },

    titleBar: {
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },

    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white" 
       },
})