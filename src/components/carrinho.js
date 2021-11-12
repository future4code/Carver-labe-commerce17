import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import App from "../App";

const CarrinhoContainer = styled.div`
  padding: 8px;
  background-color: #EAE7C6;
  border-radius: 20px;
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