import React from "react";
import {StyleSheet,View,Text,FlatList} from "react-native"
import TextStart from "./textStart";

export default class FlatListStart extends React.Component{
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

    _renderItem = ({item}) =>{
        return (
            <View style={{backgroundColor: item.data.color,width: 300,height: 180}}>
                <Text>{item.data.title}</Text>
            </View>
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