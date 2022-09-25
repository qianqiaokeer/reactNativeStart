import React from "react";
import {StyleSheet,View,Button,Text,ActivityIndicator} from "react-native"

export default class ActivityIndicatorStart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        };
    }
    _loadingContrl = () => {
        const isShow = this.state.isShow;
        this.setState({isShow: !isShow});
    }
    render(){
        return(
            <View>
                <Text> loading....</Text>
                <ActivityIndicator
                    animating= {this.state.isShow} 
                    color= "blue" 
                    size= "large">

                </ActivityIndicator>
                <Button 
                    title={this.state.isShow?"隐藏":"显示"}
                    onPress={this._loadingContrl}>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})