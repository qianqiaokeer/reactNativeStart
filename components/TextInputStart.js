import React from "react";
import {StyleSheet,View,Text,TextInput} from "react-native"

export default class TextInputStart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        };
    }

    _changText = (newText) => {
        console.log(newText);
    }

    render(){
        return(
            <View style= {styles.container}>
                <TextInput style= {styles.input} placeholder="请输入" placeholderTextColor= "#ccc" onChangeText={this._changText}>

                </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
    },
    input: {
        width:200,
        borderWidth: 2,
        borderColor: "blue",
        borderRadius: 5
    }
})