import { Component } from "react";
import { Text, View } from "react-native";

class Comentario extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.datos)
        return(
            <View>
                <Text>
                    {this.props.datos.data.comentario}
                </Text>
            </View>
        )
    }

}

export default Comentario;