import React from "react";
import styled from "styled-components";
import Carrinho from "./components/carrinho";
import Card from "./components/card";

const Display = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr 180px;
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3,300px);
    justify-items: start;
    justify-content: center;
`
const Inputs = styled.div`
    min-height: 100vh;
    background-color: #EAE7C6;
    border-radius: 20px;
    margin: 5px;
    padding: 10px;
    font-size: 14px;

    span {
      font-weight: bold;
    }

    input {
      margin: 2px;
      width: 150px;
    }
`

export default class App extends React.Component {

  state = {
    produtos: [
      {
        id: 1,
        name: 'Produto Um',
        price: 1000.0,
        photo: 'https://picsum.photos/200/200?a=5'
      },
      {
        id: 2,
        name: 'Produto Dois',
        price: 270.0,
        photo: 'https://picsum.photos/200/200?a=2'
      },
      {
        id: 3,
        name: 'Produto Três',
        price: 150.0,
        photo: 'https://picsum.photos/200/200?a=3'
      },
      {
        id: 4,
        name: 'Produto Quatro',
        price: 75.0,
        photo: 'https://picsum.photos/200/200?a=4'
      },
      {
        id: 5,
        name: 'Produto 5',
        price: 75.0,
        photo: 'https://picsum.photos/200/200?a=4'
      },
      {
        id: 6,
        name: 'Produto 6',
        price: 75.0,
        photo: 'https://picsum.photos/200/200?a=4'
      }
    ],

    carrinho: [
      {
        id: 6,
        name: 'Produto 6',
        price: 75.0,
        photo: 'https://picsum.photos/200/200?a=4'
        
      }],

    query: '',
    minPrice: '',
    maxPrice: ''
  }

  Updatequery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  UpdateMinPrice = (event) => {
    this.setState({
      minPrice: event.target.value
    })
  }

  UpdateMaxPrice = (event) => {
    this.setState({
      maxPrice: event.target.value
    })
  }
  
AddCarrinho = (event) => {
    let selecionarProduto = this.state.produtos.filter ((produto) => {
      return produto.id === event.target.value
    })

    let verificar = 0
  
    let itemCarrinho = this.state.carrinho.map ((carrinho) => {
      if (carrinho.produto.id === event.target.value) {
        carrinho.quantidade ++
        verificar ++
      }
      return carrinho
    })

    if (verificar === 0) {
      this.setState({
          carrinho: [...this.state.carrinho, {
          quantidade: 1,
          produto: selecionarProduto[0]
        }]
      }, () => console.log(this.state.carrinho))
    } else {
      this.setState({
        carrinho: itemCarrinho
      }, () => console.log(this.state.carrinho))
    }

  }

 

  render() {
    return (

      <Display>

        <Inputs>

          <p>Procure pelo <span>Nome</span>:</p>
          <input
            placeholder='Pesquisar'
            value={this.state.query}
            onChange={this.Updatequery}
          />

          <p>Procure pelo <span>Preço</span>:</p>
          <input
            type='number'
            placeholder='R$ Preço Min'
            value={this.state.minPrice}
            onChange={this.UpdateMinPrice}
          />
          <input
            type='number'
            placeholder='R$ Preço Máx'
            value={this.state.maxPrice}
            onChange={this.UpdateMaxPrice}
          />

        </Inputs>

        <Cards>

          {this.state.produtos
            .filter(produto => {
              return produto.name.toLowerCase().includes(this.state.query.toLowerCase())
            })
            .filter(produto => {
              return this.state.minPrice === '' || produto.price >= this.state.minPrice
            })
            .filter(produto => {
              return this.state.maxPrice === '' || produto.price <= this.state.maxPrice
            })
            .map(produto => {
              return <Card photo={produto.photo} name={produto.name} price={produto.price} parcelado={produto.price / 10} />
            })}
        </Cards>
        <Inputs>
        
            {this.state.carrinho.map(produto => {
              return <Carrinho name={produto.name} price={produto.price}/>
            })}
          
        </Inputs>
      </Display>




    )
  }
}
