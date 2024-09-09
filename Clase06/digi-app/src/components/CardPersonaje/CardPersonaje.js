import React, { Component } from "react";

class CardPersonaje extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <img src={this.props.data.image}/>
                <h2>{this.props.data.name}</h2>
            </div>
        );
    }
}

export default CardPersonaje;