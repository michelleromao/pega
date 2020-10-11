import React,{useState} from 'react'
import {Container} from './OrderByStyled';
export default function OrderBy(){
    const [order,setOrder] = useState('none');
    const [titulo,setTitulo] = useState('Ordenar Por');
    function abrirMenu() {
        if (order === 'none') {
          setOrder('block');
          document.querySelector('svg').style =
            'transform: rotateX(180deg);';
        }
        if (order === 'block') {
          setOrder('none');
          document.querySelector('svg').style =
            'transform: rotateX(360deg);';
        }
      }
      function mudarTitulo(a){
        setTitulo(a);
        setOrder('none');
        document.querySelector('svg').style =
            'transform: rotateX(360deg);';
      }
    return(
        <Container order={order}>
            <div className="ordenar" onClick={abrirMenu}>{titulo} 
                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5.5 5L10 1" stroke="#569CCD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
            <ul className='box'>
                <li onClick={()=>mudarTitulo('Maior Preço')}>Maior Preço</li>
                <p></p>
                <li onClick={()=>mudarTitulo('Menor Preço')}>Menor Preço</li>
            </ul>

        </Container>
    );
}