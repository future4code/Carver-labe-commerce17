import React from "react";
import styled from "styled-components";


const DisplayCard = styled.div `
    background-color: rgba(188, 204, 154, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    max-height: 50vh;
    margin: 10px;
    padding: 3.5px;
    border-radius: 10px;
    
    img {
        width: 90%;
        border-radius: 5px;
        margin-top: 10px;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 0px;
    }

    p {
        margin-top: 0px;
    }

    button {
        margin-bottom: 5px;
    }
`

export default class Card extends React.Component {

    render() {
        return (
            <DisplayCard>
                <img src={this.props.photo} alt={"imagem do post"} />
                <h2>{this.props.name}</h2>
                <p>R$:{this.props.price} ou por 10x R$:{this.props.parcelado}</p>
                <button value = {this.props.id} onClick={this.props.function}>Adicionar ao carrinho</button>
            </DisplayCard>

        );
    }
}
