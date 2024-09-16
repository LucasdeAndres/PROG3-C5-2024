import React, { Component } from "react";

class CardPersonaje extends Component{
    constructor(props){
        super(props);
        this.state = {
            textoFav: "agregar a favoritos",
            esFav: false
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem("fav")
        if(storage !== null){
            let storageParseado = JSON.parse(storage)
            let estaEnFav = storageParseado.includes(this.props.data.id)
            if(estaEnFav){
                this.setState({
                    textoFav: "sacar de favoritos",
                    esFav: true
                })
            }
        }
    }

    agregarFav(id){
        let storage = localStorage.getItem("fav")
        if(storage !== null){
            let favParseados = JSON.parse(storage)
            favParseados.push(id)
            let favStringificado = JSON.stringify(favParseados)
            localStorage.setItem("fav", favStringificado)
        } else {
            let arrayFav = [id]
            let arrayStringificado = JSON.stringify(arrayFav)
            localStorage.setItem("fav", arrayStringificado)
        }
        this.setState({
            textoFav: "sacar de favoritos",
            esFav: true
        })
    }

    sacarFav(id){
        let storage = localStorage.getItem("fav")
        let favParseados = JSON.parse(storage)
        let nuevoArrayFav = favParseados.filter(elem => elem !== id)
        let nuevoArrayString = JSON.stringify(nuevoArrayFav)
        localStorage.setItem("fav",nuevoArrayString)
        this.setState({
            textoFav: "agregar a favoritos",
            esFav: false
        })
    }

    render(){
        return(
            <div>
                <img src={this.props.data.image}/>
                <h2>{this.props.data.name}</h2>
                <button onClick={this.state.esFav ? ()=>this.sacarFav(this.props.data.id) : ()=>this.agregarFav(this.props.data.id)}>{this.state.textoFav}</button>
            </div>
        );
    }
}

export default CardPersonaje;