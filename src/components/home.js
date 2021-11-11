import React from "react";
import styled from "styled-components";

const ProdutosContainer = styled.div`

`
const HeaderProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

`
const GridProdutos = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  
 
`
const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  border: 1px solid #000;

  p {
    margin: 4px 0;
  }
`
const Botao = styled.button`
    align-self: center;
     margin-top: 4px;
`

const Img = styled.img`
height: 300px;
width: 100%;
`
export class Home extends React.Component{

    render(){
        return(
            <ProdutosContainer>
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
                <GridProdutos>
                <InfoCard>
                       <Img src="https://picsum.photos/200/200?a=1"/>
                       <p>Produto 1</p>
                       <p>R$</p>
                       <Botao>Adicionar ao Carrinho</Botao>
                   </InfoCard>
                   <InfoCard>
                       <Img src="https://picsum.photos/200/200?a=1"/>
                       <p>Produto 1</p>
                       <p>R$</p>
                       <Botao>Adicionar ao Carrinho</Botao>
                   </InfoCard>
                   <InfoCard>
                       <Img src="https://picsum.photos/200/200?a=1"/>
                       <p>Produto 1</p>
                       <p>R$</p>
                       <Botao>Adicionar ao Carrinho</Botao>
                   </InfoCard>
                </GridProdutos>
                <GridProdutos>
                <InfoCard>
                       <Img src="https://picsum.photos/200/200?a=1"/>
                       <p>Produto 1</p>
                       <p>R$</p>
                       <Botao>Adicionar ao Carrinho</Botao>
                   </InfoCard>
                   <InfoCard>
                       <Img src="https://picsum.photos/200/200?a=1"/>
                       <p>Produto 1</p>
                       <p>R$</p>
                       <Botao>Adicionar ao Carrinho</Botao>
                   </InfoCard>
                   
                </GridProdutos>
                
            </ProdutosContainer>
        )

    }
}