import React from "react";
import styled from "styled-components";

const ContainerFiltro= styled.div`
    border: 1px solid #000;
    padding: 8px;
    
` 
const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
`
export default class Filtro extends React.Component{
    render(){
       return(
        <ContainerFiltro>
        <h3>Filtros</h3>
        <InputContainer>
        Valor mínimo:
        <input type = "number"/>
        </InputContainer>
        <InputContainer>
        Valor máximo
        <input type = "number"/>
        </InputContainer>
        <InputContainer>
        Buscar por nome:
        <input type = "text"/>
        </InputContainer>
    </ContainerFiltro>
       )
    }
}

