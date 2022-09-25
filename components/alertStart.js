import React from "react";
import {StyleSheet,View,Text,Alert,Button} from "react-native";

export default class AlertStart extends React.Component{
    _alert1 = () => {
        Alert.alert("您好",null,null);
    }

    _alert2 = () => {
        Alert.alert("暗号","爱你孤身走暗巷",null);
    }

    _alert3 = () => {
        Alert.alert("暗号","爱你孤身走暗巷",[
            {text: "取消",onPress: () => {console.log("不理会")}},
            {text: "确认",onPress: () => {console.log("爱你不跪的模样")}},
            {text: "帮助",onPress: () => {console.log("不会啊")}}
        ]);
    }
    render(){
        return (
            <View>
                <Button onPress={this._alert1} title= "简单弹窗"></Button>
                <Button onPress={this._alert2} title= "难一点的弹窗"></Button>
                <Button onPress={this._alert3} title= "功能最全的弹窗"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
  });