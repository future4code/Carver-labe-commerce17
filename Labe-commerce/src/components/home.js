import React from "react";
import styled from "styled-components";

const ProdutosContainer = styled.div``;

const GridProdutos = styled.div`
  display: flex;
  padding: 10px;
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  border: 1px solid #000;
  position: relative;

  p {
    margin: 4px 0;
  }
`;
const Botao = styled.button`
  align-self: center;
  margin-top: 4px;
`;

const Img = styled.img`
  height: 300px;
  width: 100%;
`;
export class Home extends React.Component {
  render() {
    return (
      <div>
        <ProdutosContainer>
          <GridProdutos>
            <InfoCard>
              <Img src={this.props.photo} alt={"imagem do post"} />
              <p>{this.props.name}</p>
              <p>{this.props.price}</p>
              <Botao>Adicionar ao Carrinho</Botao>
            </InfoCard>
          </GridProdutos>
        </ProdutosContainer>
      </div>
    );
  }
}
