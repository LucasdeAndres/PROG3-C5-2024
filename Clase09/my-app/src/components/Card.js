import { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

class Card extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>
                    {this.props.datos.name}
                </Text>
                <Image
                    style={styles.img}
                    source={{uri:this.props.datos.image}}
                    resizeMode="contain"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        height: 200
    }
})

export default Card