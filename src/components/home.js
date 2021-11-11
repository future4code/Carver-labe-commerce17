import React from "react";
import styled from "styled-components";

const ContainerProdutos = styled.div`

`

const SuperiorProduto = styled.div`

display: flex;
align-items: center;
justify-content: space-space-between;
padding: 0 16;
`

const DivisaoProduto= styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
padding: 16px;
`

export class Home extends React.Component{

    render(){
        return(
            <ContainerProdutos>
                <DivisaoProduto>
                  
                  <SuperiorProduto>
                  <p>Quantidade de produtos:</p>
                    Ordenação:
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                  </SuperiorProduto>

                </DivisaoProduto>

            </ContainerProdutos>

        )
    }

}
