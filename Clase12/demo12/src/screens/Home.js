import { Component } from "react";
import {ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import { db } from "../firebase/config";
import Comentario from "../components/Comentario";

class Home extends Component{
    constructor(){
        super()
        this.state = {
            email: "",
            comentario: "",
            comentarios: [],
            cargando: true
        }
    }

    componentDidMount(){
        db.collection('comentarios').onSnapshot(docs => {
            let comentarios = [];
            docs.forEach(doc => comentarios.push({
                id: doc.id,
                data: doc.data()
            }))
            this.setState({
                comentarios: comentarios,
                cargando: false
            })
        })
    }

    comentar(email,com){
        db.collection('comentarios').add({
            owner: email,
            createdAt: Date.now(),
            comentario: com,
        })
    }

    render(){
        return(
            <View>
                {this.state.cargando ? <ActivityIndicator/> : <FlatList data={this.state.comentarios} keyExtractor={item => item.id.toString()} renderItem={({item}) => <Comentario datos={item}/>}/>}
                <View style={styles.contenedor} >
                    <Text>
                        Publicar comentario
                    </Text>
                    <TextInput style={styles.input} keyboardType='email-address' 
                    placeholder='email'
                    onChangeText={text => this.setState({email: text})}
                    value={this.state.email}
                    />
                    <TextInput style={styles.inputComentario} keyboardType='default'
                    onChangeText={text => this.setState({comentario:text})}
                    value={this.state.comentario} 
                    />
                    <TouchableOpacity style={styles.boton} onPress={()=>this.comentar(this.state.email,this.state.comentario)}>
                        <Text style={styles.textoBoton} >
                            Comentar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contenedor: {
        paddingHorizontal: 10,
        marginTop: 20
    },
    input: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderRadius: 6,
        marginVertical: 10
    },
    inputComentario: {
        height: 100,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderRadius: 6,
        marginVertical: 10
    },
    boton : {
        backgroundColor: "#28a745",
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#28a745"
    },
    textoBoton : {
        color: "#fff"
    }
})

export default Home