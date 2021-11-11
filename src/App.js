import React from 'react';
import styled from 'styled-components';
import Carrinho  from './components/Carrinho';
import Filtro from './components/Filtro'
import {Home} from './components/Home'


 const Container = styled.div`
 display: grid;
 grid-template-columns:  1fr 3fr 1fr;
 padding: 16px;
 gap: 8px;
 
 `;

 const produtos = [ 
  {
    id: 1,
    name: 'Produto legal',
    price: 123,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 200,
    photo: 'https://picsum.photos/200/200?a=2'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 30,
    photo: 'https://picsum.photos/200/200?a=3'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 10,
    photo: 'https://picsum.photos/200/200?a=4'
  }
]
 

export default class App extends React.Component{
 
 render(){
   return(
    <Container>
      <Filtro/>
      <Home/>
    </Container>
   )
  
 }
}


