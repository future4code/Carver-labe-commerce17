import React from "react";
import styled from "styled-components";
import Card from "./components/card";
import Carrinho from "./components/carrinho";

const HeaderContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height:80px;
    background-color:black;
    color:white;
    font-size:3rem;

`
const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1.3fr;
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
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
      width: 80%;
      border-radius: 20px;
      padding:8px;
    }


`
const ButtonClean = styled.button`
    margin-bottom: 5px;
    border-radius: 15px;
    background-color: black;
    border: none;
    padding: 6px;
    color: white;
    `

export default class App extends React.Component {

  state = {
    produtos: [
      {
        id: 0,
        name: "Pedacinho de Venus",
        price: 15000.00,
        photo:
          "https://www.zmescience.com/mrf4u/statics/i/ps/cdn.zmescience.com/wp-content/uploads/2016/08/600px-Venus_in_Real_Color_28Mosaic29.jpg?width=1200&enable=upscale",
        quantify: 0,
      },
      {
        id: 1,
        name: "Um bronze em Marte",
        price: 10000.00,
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg",
        quantify: 0,
      },
      {
        id: 2,
        name: "De uma volta em Saturno",
        price: 5000.00,
        photo:
          "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/16/saiba-como-o-ciclo-de-saturno-influencia-na-perspectiva-profissional-16094.jpg",
        quantify: 0,
      },
      {
        id: 3,
        name: "Uma hora em Jupiter",
        price: 35000.00,
        photo:
          "https://s2.glbimg.com/34AekqqbXdAFCWAuG0g34I6d0Nw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/w/tNqMxeRvWvSvLbHuChkA/jupiter01.jpg",
        quantify: 0,
      },
      {
        id: 4,
        name: "Sua Terra",
        price: 2000.00,
        photo:"https://tdc-images.tolunastart-tdcprod.com/2017/09/30/59092e12-f0f9-4c23-9680-33a5ec15d110.jpg",
        quantify: 0,
      },
      {
        id: 5,
        name: "Falso Plutão",
        price: 27000.00,
        photo: "https://f4.bcbits.com/img/a0980289374_10.jpg",
        quantify: 0,
      },
      {
        id: 6,
        name: "Novo mundo",
        price: 370000.00,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCPC7tiM0Aixf6OM3fttiPAB1qDRvG9xaiDqdy6lVOHIMknmYc4nMnCpYLLxDGBGorG4&usqp=CAU",
        quantify: 0,
      },
      {
        id: 7,
        name: "Núcleo",
        price: 60000.00,
        photo: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/09/05/1700461395-1040064729eba61f5-3d3a-47ff-aa71-5d692824d930.jpg",
        quantify: 0,
      },
    ],
    query: '',
    minPrice: '',
    maxPrice: '',
    filterName: '',
    ordem: "Crescente",
  }

  onChangeFilter = (event) => {
    this.setState({ ordem: event.target.value });
  };
  onChangeFiltroMin = (event) => {
    this.setState({ minPrice: event.target.value });
  };
  onChangeFiltroMax = (event) => {
    this.setState({ maxPrice: event.target.value });
  };
  onChangeFiltroNome = (event) => {
    this.setState({ filterName: event.target.value });
  };
  
  onSubmitFinalizaCompra = (event) => {
    alert ("Compra realizada com sucesso!")
    window.location.reload(false);
  };
  
 // -------------------- FUNÇÕES DO FILTRO --------------------
  ordemArray = () => {
    const ordemArray = this.state.produtos.sort((a, b) =>
      this.state.ordem === "Crescente" ? a.price - b.price : b.price - a.price
    );
    return ordemArray;
  };

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

  limparFiltro = () => {
    this.setState({
      minPrice: "",
      maxPrice: "",
      filterName: "",
    });
  };

  filtroPassagensArray = (min, max, texto) => {
    let filtragemPorValor;
    if (min || max) {
      filtragemPorValor = this.state.produtos.filter((item) => {
        if (min && !max) {
          return item.price >= min;
        } else if (!min && max) {
          return item.price <= max;
        } else if (min && max) {
          return item.price >= min && item.price <= max;
        }
      });
    } else {
      filtragemPorValor = this.state.produtos;
    }

    let filtragemCompleta;
    if (texto) {
      filtragemCompleta = filtragemPorValor.filter((item) => {
        return item.name.toLowerCase().includes(`${texto.toLowerCase()}`);
      });
    } else {
      filtragemCompleta = filtragemPorValor;
    }
    return filtragemCompleta;
  };

  // -------------------- FUNÇÕES DO CARRINHO --------------------
  adicionarAoCarrinho = (id) => {
    const carrinhoArray = this.state.produtos.map((produto) => {
      if (produto.id === id) {
        const quantidadeCarrinho = produto.quantify + 1;
        const produtoCarrinho = {
          ...produto,
          quantify: quantidadeCarrinho,
        };
        return produtoCarrinho;
      } else {
        return produto;
      }
    });
    this.setState({ produtos: carrinhoArray });
  };

  subtrairDoCarrinho = (id) => {
    const carrinhoArray = this.state.produtos.map((produto) => {
      if (produto.id === id) {
        const quantidadeCarrinho = produto.quantify - 1;
        const produtoCarrinho = {
          ...produto,
          quantify: quantidadeCarrinho,
        };
        return produtoCarrinho;
      } else {
        return produto;
      }
    });
    this.setState({ produtos: carrinhoArray });
  };

  removerDoCarinho = (id) => {
    const carrinhoArray = this.state.produtos.map((produto) => {
      if (produto.id === id) {
        const produtoCarrinho = { ...produto, quantify: 0 };
        return produtoCarrinho;
      } else {
        return produto;
      }
    });
    this.setState({ produtos: carrinhoArray });
  };

  render() {
    this.ordemArray();
    let filtroArray = this.filtroPassagensArray(
      this.state.minPrice,
      this.state.maxPrice,
      this.state.filterName
    );

    return (
      <>
      <HeaderContainer>
      CONQUISTE SEU ESPAÇO
      </HeaderContainer>
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
          <ButtonClean onClick={this.limparFiltro}>Limpar</ButtonClean>
          <p>Quantidade de produtos: {filtroArray.length}  </p>
          <div>
            <label>Ordenar por: </label>
            <select onChange={this.onChangeFilter}>
              <option value="Crescente">Menor Preço </option>
              <option value="Decrescente">Maior Preço </option>
            </select>
          </div>
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
              return (
                <Card photo={produto.photo} 
                      name={produto.name} 
                      price={produto.price} 
                      parcelado={produto.price / 10} 
                      id={produto.id}
                      adicionarAoCarrinho={this.adicionarAoCarrinho}
                      produtos={filtroArray}
                      />
              ) 
            })}
        </Cards>
        <Inputs>

        <Carrinho
            adicionarAoCarrinho={this.adicionarAoCarrinho}
            subtrairDoCarrinho={this.subtrairDoCarrinho}
            removerDoCarinho={this.removerDoCarinho}
            produtosCarrinho={this.state.produtos}
            finalizaCompra ={this.onSubmitFinalizaCompra}
          />
        </Inputs>
      </Display>
      </>
    )
  }
}
