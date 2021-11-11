import React from 'react'
import styled from 'styled-components';

const FiltroContainer = styled.div`
border: 1px solid black;
padding: 8px;
`

const InputCont = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    align-items: flex-start;
`
const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  p {
    margin: 4px 0;
  }
`

export default class Filtro extends React.Component{

    render(){
        return (
            <FiltroContainer>
                <h3>Filtros</h3>
                <InputCont>
                Valor Mínimo:
                <input
                type="number"
                />
                  Valor Máximo:
                <input
                type="number"
                />
                  Buscar por Nome:
                <input
                type="text"
                />
                
                </InputCont>
            </FiltroContainer>
            
        
    )
}


}