import styled from 'styled-components';

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        width:180px;
        height:150px;
        margin-bottom: 190px;
        margin-right: 20px;
    } 
`
export const Photo = styled.div`
    img {
        width: 100%;  
        height: 180px;
        border-radius: 10%;  
        object-fit: cover;
    }
`
export const Infos = styled.div`
    margin-top: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    svg {
        fill: #BE5599;
        width: 30px;
        stroke-width: 3;
        stroke: #BE5599;
    }
`
export const NamePrice = styled.div``
export const Name = styled.h4`
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 14px;
        color: #202020;
        padding-bottom: 7px;
`
export const Price = styled.h4`
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 14px;
        color: #569CCD;
        margin-button: 15px;        
    }
`
export const PriceOld = styled.h4`
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 14px;
        color: #4E4E4E;
        margin-button: 15px;
        text-decoration: line-through;
        margin-right: 10px;
`
export const Prices = styled.h4`
        display: flex;
        flex-direction: row;
`

export const Favorito = styled.div``
export const Botao = styled.button`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 14px;
    border-radius: 6px;
    border: solid 2px #83BDE6;
    padding:5px 10px 5px 10px;
    color: #83BDE6;
    background:none;
    margin-top:10px;
`
