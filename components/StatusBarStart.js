import React from "react";
import {StyleSheet,View,Text,StatusBar} from "react-native"
// 状态栏
export default class StatusBarStart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
    
        };
    }

    render(){
        return(
            <View style={{backgroundColor: "pink",width: "100%",height: "100%"}}>
                <StatusBar
                    barStyle= "dark-content"
                    backgroundColor= "red"
                    //隐藏
                    hidden = {true}
                    // 透明
                    translucent = {true}>
                    </StatusBar>
                <View>
                    <Text>内容</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})