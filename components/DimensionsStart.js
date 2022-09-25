import React from "react";
import {StyleSheet,View,Text,Dimensions} from "react-native"

export default class DimensionsStart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <View>
                <View style= {styles.view1}></View>
                <View style= {styles.view2}></View>
            </View>
        )
    }
}
//Dimensions动态获取屏幕的宽高
const styles = StyleSheet.create({
    view1: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 2,
        backgroundColor: 'yellow'
    },
    view2: {
        width: Dimensions.get('window').width / 3 * 2,
        height: Dimensions.get('window').height / 2,
        backgroundColor: 'orange'
    }
})