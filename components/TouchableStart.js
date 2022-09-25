import React from "react";
import {StyleSheet,View,Text,Alert,FlatList,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback} from "react-native"
import TextStart from "./textStart";

export default class TouchableStart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    key: "red",
                    data: {
                        title: "红色",
                        color: "red"
                    }
                },
                {
                    key: "yellow",
                    data: {
                        title: "黄色",
                        color: "yellow"
                    }
                },
                {
                    key: "pink",
                    data: {
                        title: "粉色",
                        color: "pink"
                    }
                },
                {
                    key: "orange",
                    data: {
                        title: "橘色",
                        color: "orange"
                    }
                },
                {
                    key: "blue",
                    data: {
                        title: "蓝色",
                        color: "blue"
                    }
                },
                {
                    key: "skyblue",
                    data: {
                        title: "天空蓝",
                        color: "skyblue"
                    }
                }
            ]
        }
    }

    _alertColor = (color) => {
        Alert.alert(color,null,null);
    }

    _renderItem = ({item, index}) =>{
        return (
                (index === 0)
                ?
                <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor = "#c1c1c1"
                    onPress = {this._alertColor.bind(this,item.data.color)}>
                    <View 
                        
                        style={{backgroundColor: item.data.color,width: 300,height: 180}}>
                        <Text>{item.data.title}</Text>
                    </View>
                </TouchableHighlight>
                :(
                    index === 1
                ?
                <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress = {this._alertColor.bind(this,item.data.color)}>
                    <View 
                        
                        style={{backgroundColor: item.data.color,width: 300,height: 180}}>
                        <Text>{item.data.title}</Text>
                    </View>
                </TouchableOpacity>
                :
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple("red")}
                    onPress = {this._alertColor.bind(this,item.data.color)}>
                    <View 
                        
                        style={{backgroundColor: item.data.color,width: 300,height: 180}}>
                        <Text>{item.data.title}</Text>
                    </View>
                </TouchableNativeFeedback>
                )
                
        )
    }
    render(){
        return(
            <FlatList data={this.state.list} renderItem= {this._renderItem}>
                
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    
})