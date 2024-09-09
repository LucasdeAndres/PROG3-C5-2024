import React, { Component } from "react";
import CardPersonaje from "../CardPersonaje/CardPersonaje";
import Filtro from "../Filtro/Filtro";

class ListaPersonajes extends Component{
    constructor(){
        super();
        this.state = {
            personajes: [],
            backup: []
        }
    }

    componentDidMount(){
        fetch("https://digi-api.com/api/v1/digimon")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({
                personajes: data.content,
                backup: data.content
            })
        })
        .catch((error) => console.log(error))
    }

    filtrarPersonajes(nombre){
        let personajesFiltrados = this.state.backup.filter((pj) => pj.name.toLowerCase().includes(nombre.toLowerCase()))
        this.setState({
            personajes: personajesFiltrados
        })
    }

    render(){
        return(
            <div>
                <h1>Lista de digimons</h1>
                <Filtro filtrarPersonajes={(nombre) => this.filtrarPersonajes(nombre)}/>
                {this.state.personajes.length === 0 ? 
                <h3>Cargando...</h3> :
                this.state.personajes.map((pj) => <CardPersonaje data={pj}/>)}
            </div>
        );
    }
}

export default ListaPersonajes;