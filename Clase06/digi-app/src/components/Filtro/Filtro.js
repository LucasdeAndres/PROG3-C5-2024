import React, { Component } from "react";

class Filtro extends Component{
    constructor(){
        super();
        this.state = {
            valorInput: ""
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    controladorDeCambios(event){
        this.setState({
            valorInput: event.target.value
        },
        () => this.props.filtrarPersonajes(this.state.valorInput))
        
    }


    render(){
        return(
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <input type="text" placeholder="escribir nombre" onChange={(event) => this.controladorDeCambios(event)} value={this.state.valorInput}/>
            </form>
        )
    }
}

export default Filtro