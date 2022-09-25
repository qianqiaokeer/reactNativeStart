import React from "react";
import {StyleSheet,View,Text,Button} from "react-native"

export default class ButtonStart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    _onPressHandler(){
        this.setState({ count : ++this.state.count})
    }

    render(){
        return(
            <View>
                <Text>{this.state.count}</Text>
                {/* 按钮可以通过onPress绑定触摸点击事件 */}
                {/* Button按钮必须使用title设置文本 不能内嵌文本 内嵌文本只有Text */}
                <Button title="点我加一" onPress={this._onPressHandler.bind(this)}></Button>
            </View>
        )
    }
}