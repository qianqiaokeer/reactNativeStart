import React from "react";
import {StyleSheet,View,Text} from "react-native";

export default class ViewStart extends React.Component{
    render(){
        return (
            <View style= {styles.container}>
                <View style= {styles.one}>
                    <Text>1</Text>
                </View>
                <View style= {styles.two}>
                    <Text>2</Text>
                </View>
                <View style= {styles.three}>
                    <Text>3</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 300,
        height: 200,
        marginTop: 20,
        backgroundColor: "blue",
    },
    one:{
        height: 30,
        backgroundColor: "green"
    },
    two:{
        height: 50,
        backgroundColor: "yellow"
    },
    three:{
        height: 80,
        backgroundColor: "pink"
    }
  });