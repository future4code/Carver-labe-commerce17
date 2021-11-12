import React from "react";
import styled from "styled-components";
import Filtro from "./components/filtro";
import { Home } from "./components/home";
import Carrinho from "./components/carrinho";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const HeaderProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: solid 1px;
`;

const DivPost = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 1",
        price: 10000.0,
        photo: "https://picsum.photos/200/200"
      },
      {
        id: 2,
        name: "Produto 2",
        price: 200,
        photo: "https://picsum.photos/200/200?a=2"
      },
      {
        id: 3,
        name: "Produto 3",
        price: 30,
        photo: "https://picsum.photos/200/200?a=3"
      },
      {
        id: 4,
        name: "Produto 4",
        price: 10,
        photo: "https://picsum.photos/200/200?a=4"
      }
    ]
  };
  render() {
    const listaDePosts = this.state.produtos.map((produtosDaLoja) => {
      return (
        <Home
          key={produtosDaLoja.id}
          photo={produtosDaLoja.photo}
          name={produtosDaLoja.name}
          price={produtosDaLoja.price}
        />
      );
    });
    return (
      <Container>
        <div>
          <Filtro />
        </div>
        <DivPost>
          <HeaderProdutos>
            <p>Quantidade de produtos:</p>
            <label>
              Ordenação:
              <select>
                <option>Crescente</option>
                <option>Decrescente</option>
              </select>
            </label>
          </HeaderProdutos>
          {listaDePosts}
        </DivPost>
        <div>
          <Carrinho />
        </div>
      </Container>
    );
  }
}
