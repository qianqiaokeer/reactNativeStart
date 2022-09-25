import React,{Component} from "react";
import { StyleSheet, View,Text,Image } from "react-native";

export default class ImageStartTo extends Component{
    constructor(props){
        super(props);
        this.state = {
            images: [
                require('../image/a_girl.jpg'),
                require('../image/leg.jpg'),
                require('../image/nap.jpg'),
                require('../image/price.jpg'),
            ],
            //网络图片 必须使用一个对象描述 对象中的key为uri
            imagesTo: [
                {
                    uri: 'https://img0.baidu.com/it/u=3876981621,2651377706&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
                },
                {
                    uri: 'https://img0.baidu.com/it/u=3876981621,2651377706&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
                }
            ]
        }
    }
    
    render (){
        
        return (
            <View>
                {
                    this.state.images.map((img,i) => (
                        <Image key={i} source = {img} style={styles.image}></Image>
                    ))
                }
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