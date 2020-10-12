import styled from 'styled-components';

export const Container = styled.div `
display: flex;
flex-direction: column;
width: 272px;
height:fit-content;
border: 1px solid #BE5599;
box-sizing: border-box;
border-radius: 6px;
padding: 20px 20px 20px 20px;
.titulo{
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #BE5599;
}
.listaFiltro li{
    display:flex;
    flex-direction:column;
    justify-content: center;
    height:fit-content;
    border-bottom:1px solid #B8B8B8;
    padding: 20px 0 20px;
}
.listaFiltro li .tituloFiltro{
display:flex;
align-items:center;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #202020;
mix-blend-mode: normal;
cursor: pointer;
} 
.listaFiltro li div svg{
    margin-left:20px;
}

.checkboxList{
display:flex;
flex-direction:column;
margin-top:10px;
position: relative;
}
.checkboxList label{
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #202020;
margin:10px 0 0 0px;
display:flex;
align-items:center;
}
.labelCheck{
    margin-left: 35px;
    display:flex;
    
}

.checkboxList label input{
    position:absolute;
    opacity:0;
    cursor:pointer;
    width: 20px;
    height: 20px;
}
.checkboxList label span{
    
    width: 20px;
    height: 20px;
    border: 2px solid #BE5599;
    box-sizing: border-box;
    border-radius: 6px;
    position:absolute;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
}
.check{
    display:flex;
    align-items:center;
    justify-content:center;
}
.check div{
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border-radius: 3px;
    position:absolute;
    cursor:pointer;
    background-color: transparent;
}
.checkboxList label input:checked ~ .check div{
    background-color: #BE5599;
}

.preco{
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
color: #000000;
}
.preco div{
background: #FFFFFF;
border: 1px solid #BE5599;
box-sizing: border-box;
border-radius: 12px;
height: 52px;
width: 87px;
display:flex;
align-items:center;
justify-content:center;
}
div p {
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #BE5599;
margin: 0 5px 0 5px;
}
.preco div input{
    width:100%;
    height:100%;
    background-color:transparent;
    border-style:none;
    font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: black;
}

.preco div input::placeholder{
    font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #C4C4C4;
}
.botaoFiltrar{
    display:flex;
    justify-content:center;
    margin: 20px 0 0 0;
}

.avaliation{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:20px;
}
.avaliation svg{
    margin:0!important;
}
.checkboxList.condicao,.checkboxList.entrega{
    display:flex;
    flex-direction:row!important;
    justify-content: space-between!important;
}
.botaoFiltrar button{
width: 144px;
height: 46px;
background: #569CCD;
border-radius: 6px;
border-style:none;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
}
.tamanhoCheck{
    display:flex!important;
    flex-wrap: wrap;
}
.tamanhoCheck label .labelCheck{
    margin-right:20px;
    margin-left: 25px!important;
}
.tamanhoNumeros{
    display:flex;
    margin-top:20px;
    justify-content: space-between;
    align-items:center;
}
.tamanhoNumeros input{
    width: 36px;
height: 21px;
border: 1px solid #BE5599;
box-sizing: border-box;
border-radius: 6px;
display:flex;
text-align:center;
}
.tamanhoNumeros .barra{
    display:flex;
    align-items:center;
   
width: 100%;
height: 4px;
background-color:#BE5599;
}
.barra2{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left:50px;
    width:50px;
    height:4px;
    background-color:#569CCD;
    justify-content:space-between;
}
.bola{
width: 10px;
height: 10px;
background-color:#569CCD;
border-radius:100%;
}
.checkboxList.cor .labelCheck{
    width:150px!important;
}
.CorBola{
    display:flex;
    width:20px;
    height:20px;
    border: 1px solid #E5E5E5;
    border-radius:100%;
    margin-left:5px;
}
.CorBola.amarelo{
    background: #F8F489;
}
.CorBola.azul{
    background: #52ACEB;
}
.CorBola.cinza{
    background: #C4C4C4;
}
.CorBola.laranja{
    background:  #F8963D;
}
.CorBola.preto{
    background: black;
}
.CorBola.rosa{
    background:  #EB5289;
}
.CorBola.roxo{
    background: #D552EB;
}
.CorBola.verde{
    background: #8CEB52;    
}
.CorBola.vermelho{
    background: #EA5254;
}


.categoria ,.estilo,.precofilter , .avaliation , .condicao , .tamanho, .cor, .entrega , .cidade{
    display: none!important;
    position:relative;
    z-index: 1;
}
`;