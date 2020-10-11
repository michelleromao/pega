import styled from 'styled-components';

export const Container = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #569CCD;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 107px;
svg{
    margin-left:8px;
}
div{
    display:flex;
    align-items:center;
    cursor:pointer;
}
ul{
margin-top:5px;
width: 107px;
height: fit-content;
background: #FFFFFF;
border: 1px solid #83BDE6;
box-sizing: border-box;
border-radius: 6px;
display:${props=> props.order};
flex-direction:column;
align-items:center;
justify-content:center;
}

li{
height:50px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
}
p{
    width:90%;
    border-bottom: 1px solid #B8B8B8;
}
`;