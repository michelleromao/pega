import styled from 'styled-components';

export const MenuStyled = styled.div`
width :180px;
height:230px;
top:70px;
background: #FFFFFF;
border: 1px solid #83BDE6;
box-sizing: border-box;
border-radius: 5px;
position:absolute;
z-index:1;
display:${props => props.mostrar};
margin-left:-30px;
ul{
    display:flex;
    flex-direction:column;
    align-items:center;
;}
ul li,ul li a{
    height:26px;
    width:100%;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #569CCD!important;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 6px 0 6px 0;
    
};
li:hover , li a:hover{
    background-color:#83BDE6;
    color:white!important;
    cursor:pointer;
}


`;