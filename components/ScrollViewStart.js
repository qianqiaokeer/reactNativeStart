import React from "react";
import {StyleSheet,View,Text,ScrollView} from "react-native"

export default class ScrollViewStart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: ["red","yellow","pink","orange","blue","skyblue"]
        };
    }

    render(){
        return(
            <ScrollView>
                {/* 默认情况下 内容超过屏幕 不能拖动查阅 使用SrollView即可解决 */}
                {/* 列表不是很大时候适用 太大可能渲染有问题 */}
               {
                this.state.list.map(color =>(
                    <View key={color} style={{backgroundColor: color,width: 300,height: 180}}></View>
                ))
               }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    
})