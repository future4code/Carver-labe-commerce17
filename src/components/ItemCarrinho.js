import React from "react";
import styled from "styled-components";

const ItemCarrinhoContainer = styled.div `

`


class ItemCarrinho extends React.Component {
  render() {
    return (
      <ItemCarrinhoContainer>
        <p>Produto:{this.props.produtos.name}</p>
        <p>Valor R$: {this.props.produtos.price}</p>
        <p>x {this.props.produtos.quantify}</p>
        <button
          onClick={() => this.props.adicionarAoCarrinho(this.props.produtos.id)}
        >
          +
        </button>
        <button
          onClick={() => this.props.subtrairDoCarrinho(this.props.produtos.id)}
        >
          -
        </button>
        <button
          onClick={() => this.props.removerDoCarinho(this.props.produtos.id)}
        >
          REMOVER
        </button>
        
      </ItemCarrinhoContainer>
      
    );
  }
}

export default ItemCarrinho;
