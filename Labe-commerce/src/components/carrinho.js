import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

const CarrinhoContainer = styled.div`
 border: 1px solid black;
  padding: 8px;
`

const ListaContainer =  styled.div`
display: grid;
  gap: 8px;
`



export default class Carrinho extends React.Component{
    render(){
        return(
            <CarrinhoContainer>
                <h3>Carrinho</h3>
            </CarrinhoContainer>
        )
    }

}