import React from "react";
import ItemCarrinho from "./ItemCarrinho";
import styled from 'styled-components';

const ButtonCart = styled.button`
    margin: 10px;
    border-radius: 15px;
    background-color: green;
    border: none;
    padding: 6px;
    color: white;`

class Carrinho extends React.Component {
  valorTotal = () => {
    let valorTotal = 0;

    this.props.produtosCarrinho.forEach((item) => {
      valorTotal += item.price * item.quantify;
    });
    return valorTotal.toFixed(2);
  };
  

  render() {
    const filtroCarrinho = this.props.produtosCarrinho.filter((produto) => {
      if (produto.quantify > 0) {
        return true;
      } else {
        return false;
      }
    })

    const carrinho = filtroCarrinho.map((produto) => {
      return (
        <ItemCarrinho
          adicionarAoCarrinho={this.props.adicionarAoCarrinho}
          subtrairDoCarrinho={this.props.subtrairDoCarrinho}
          removerDoCarinho={this.props.removerDoCarinho}
          produtos={produto}
          finalizaCompra={this.props.onSubmitFinalizaCompra}
        />
      );
    });

    return (
      <div>
        <h2>Carrinho</h2>
        {<h3> Total: R$ {this.valorTotal()} </h3>}
        
        {carrinho}
        <ButtonCart onClick = {() => this.props.finalizaCompra()}>Finalizar compra</ButtonCart>
      </div>
    );
  }
}

export default Carrinho;
