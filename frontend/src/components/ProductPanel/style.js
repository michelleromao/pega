import styled from 'styled-components';

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        max-width:720px;
        width: 100%;
        margin-bottom:20px;
        max-height:100%;
        border: solid 1px #569CCD;
        border-radius: 6px;
        padding: 20px;
        font-family:'Poppins';
    }
`
export const Endereco = styled.div`
`
export const H4 = styled.h4`
    font-size: 16px;
    color: #202020;
    font-weight: 600;
` 
export const Detalhes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {        
        width:100px;
        height:140px;
        object-fit:cover;  
        border-radius:20%;      
        margin-right:10px;
    }
`
export const DetalhesVenda = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

   
`
export const OutrosDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    font-size:14px;
    h6 {
        margin-bottom:3px;
        color: #202020;
        font-weight: 600;
    }

    span {
        margin-bottom:3px;
        color: #569CCD;
        font-weight: 600;
    }
`

export const ValorDetalhes = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display:flex;
    flex-direction:row;
    width:200px;
    align-items: baseline;
    span {
        margin-right:5px;
    }

    h3 {
        font-weight:500;
        font-size:26px;
        margin-right: 5px;
    }

`   
export const Acompanhamento = styled.div`
        margin-top: 30px;
        display: flex;
        flex-direction: row;

`

export const Centro = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin-top:25px;
`

export const Rastreamento = styled.div`
    font-size:16px;
    h6 {
        margin-bottom:10px;
    }
    span {
        background:#569CCD;
        padding: 0 30px 0 30px;
        border-radius:6px;
        margin-top:20px;
        color: #fff;
    }
`

export const RastreamentoInput = styled.input`
        font-size:16px;
        background:transparent;
        padding: 0 30px 0 30px;
        border: solid 2px #569CCD;
        border-radius:6px;
        margin-top:20px;
        color: #569CCD;
`

export const MaisDinheiro = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    display: flex;
    flex-direction: Column;
    
    font-size:16px;
    h6 {
        font-weight:600;
        margin-bottom: 4px;
        color: #569CCD;
    }

    span {
        font-weight:600;
        margin-bottom: 4px;
        color: #569CCD;
    }

    a {
        margin-bottom: 4px;
    }

    a {
        font-family: 'Poppins';
        font-weight: 600;
        color: #C4C4C4;
    }
    a:visited {
        font-family: 'Poppins';
        font-weight: 600;
        color: #C4C4C4;
    }

    a:active {
        font-family: 'Poppins';
        font-weight: 600;
        color: #C4C4C4;
    }

    a:link  {
        font-family: 'Poppins';
        font-weight: 600;
        color: #C4C4C4;
    }
    #left {
        display: flex;
        flex-direction: column;
        text-align:left;
    }

    #right {
        display: flex;
        flex-direction: column;
        text-align:right;
    }
`

export const Status = styled.div`

    display: flex;
    flex-direction:column;
    align-items:left;
    color: #4E4E4E;
    border-top:solid 5px #569CCD;
    width:170px;
    padding-top:20px;

    h6 {
        margin-left:-13px;
        font-weight:500;
        font-size:12px;
    }

    span {
        margin-left:-13px;
        margin-top:5px;
        font-weight:400;
        font-size:10px;
    }
`

export const Circle = styled.div`
    width:15px;
    height:15px;
    background: #569CCD;
    border-radius: 50%;
    margin-left:-5px;
    margin-top:-5px;

`

export const DetalhesItem = styled.div`
    display:flex;
    flex-direction:row;
    width:140px;
    justify-content: space-between;

    span {
        margin-right:2px;
    }


`
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100px;
`

export const Title = styled.div`
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    h4 {
        font-size: 16px;
        color: #202020;
        font-weight: 600;
    }

    span {
        color: #EA5254;
        font-weight: 600;
    }
    
`

export const Product = styled.div`
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
        padding:10px 0 10px 0;
    }

    span {
        color: #202020;
        font-weight:600;
    }
`

export const ProductItem = styled.div`
        display: flex;
        flex-direction:row;
        align-items:center;
    }

    img {        
        width:40px;
        height:60px;
        object-fit:cover;  
        border-radius:20%;      
        margin-right:10px;
    }

    span {
        font-size:14px;
        color: #4E4E4E;
        font-weight:500;
    }
`

export const Details = styled.div`
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        aligh-content: baseline;
    }    
    a {
        font-family: 'Poppins';
        font-weight: 600;
        color: #569CCD;
    }
    a:visited {
        font-family: 'Poppins';
        font-weight: 600;
        color: #569CCD;
    }

    a:active {
        font-family: 'Poppins';
        font-weight: 600;
        color: #569CCD;
    }

    a:a:link  {
        font-family: 'Poppins';
        font-weight: 600;
        color: #569CCD;
    }

    h6 {
        margin-bottom:15px;
    }


`

export const Avaliacao = styled.div`
        display:flex;
        width:120px;
        height:30px;
        align-items:center;
    }
`

export const BotaoDetails = styled.div`
        display: flex;
        flex-direction: row;        
        align-items: center;
    }

    a {
        display: flex;
        align-items: center;
    }

    span {
        color: #569CCD;
        font-weight: 600;
        margin-right:5px;
    }

    svg {
        fill:#569CCD;
    }

` 

export const User = styled.div`
        display: flex;
        flex-direction: row;
    }
    span {
        margin-right: 5px;
    }
`
export const Name = styled.div`
    span {
       color: #EA5254;
    }
`