import React,{Component} from "react";
import { StyleSheet, View,Text,Image } from "react-native";

let pic = {
    uri: 'https://img0.baidu.com/it/u=3876981621,2651377706&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
};

export default class ImageStart extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render (){
        
        return (
            <View>
                <View>
                    {/* 图片资源使用 source属性设置 */}
                    {/* 网络资源图片要设置宽高 不然不显示 */}
                    <Image source={pic} style={styles.image}></Image>
                </View>
                <View>
                    {/* 图片资源使用 source属性设置 */}
                    {/* 加载本地图片需要使用require方法 本地图片无需设置宽高*/}
                    <Image source={require('../image/a_girl.jpg')} style={styles.image}></Image>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 120
        
    }
})