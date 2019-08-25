import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Login extends Component {
    static navigationOptions={
        header:null
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Login Page </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

container:{
    paddingTop:40,
    flex:1,
    justifyContent:'center'
},
text:{
    fontSize:22
}


})
