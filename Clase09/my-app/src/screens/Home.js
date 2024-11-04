import { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            personajes: [],
        }
    }

    componentDidMount(){
        fetch("https://dragonball-api.com/api/characters")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                personajes: data.items
            })
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>
                   Personajes de dragon ball
                </Text>
                {this.state.personajes.length === 0 ? <ActivityIndicator color="red" size="large"/> : <FlatList 
                    data={this.state.personajes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <Card datos={item}/>}
                />
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        flex:1
    }
})

export default Home;