import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import App from "../App";

const DisplayCarrinho = styled.div`
    margin: 5px;
    padding: 10px;
`


export default class Carrinho extends React.Component{
    render(){
        return(
            <DisplayCarrinho>
                <h2>Carrinho</h2>
                <h3>{this.props.name}</h3>
                <p>R$:{this.props.price} ou por 10x R$:{this.props.parcelado}</p>
            </DisplayCarrinho>
        )
    }

}