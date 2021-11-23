import React from "react";
import styled from "styled-components";

const ItemCarrinhoContainer = styled.div `
border-bottom:solid black 1px;
padding-bottom:10px;
`
const ButtonAdd = styled.button`
    border-radius: 50%;
    background-color: #1dcc69;
    border: none;
    width:30px;
    height: 30px;
    color: white;
`
const ButtonRemove = styled.button`
    border-radius: 50%;
    background-color: #f75625;
    border: none;
    width:30px;
    height: 30px;
    color: white;
`
const ButtonClean = styled.button`
    margin-bottom: 5px;
    border-radius: 15px;
    background-color: black;
    border: none;
    padding: 6px;
    color: white;
    `

class ItemCarrinho extends React.Component {
  render() {
    return (
      <ItemCarrinhoContainer>
        <p>Produto: {this.props.produtos.name}</p>
        <p>Valor: R$ {this.props.produtos.price}</p>
        <p>x {this.props.produtos.quantify}</p>
        <ButtonAdd
          onClick={() => this.props.adicionarAoCarrinho(this.props.produtos.id)}
        >
          +
        </ButtonAdd>
        <ButtonRemove
          onClick={() => this.props.subtrairDoCarrinho(this.props.produtos.id)}
        >
          -
        </ButtonRemove>
        <ButtonClean
          onClick={() => this.props.removerDoCarinho(this.props.produtos.id)}
        >
          Remover itens
        </ButtonClean>
        
      </ItemCarrinhoContainer>
      
    )
  }
}

export default ItemCarrinho;
