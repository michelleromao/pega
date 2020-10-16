import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:100px;
h1{
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
color: #BE5599;
margin-bottom:20px;
}
p{
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #000000;
}
div{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:40px;
}
label{
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #202020;
margin-bottom:20px;
}
input{
width: 334px;
height: 50px;
background: #FFFFFF;
border: 2px solid #BE5599;
box-sizing: border-box;
border-radius: 6px;

}
input::placeholder{
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #B8B8B8;
text-align:center;

}
button{
width: 240px;
height: 60px;
background: #BE5599;
border-radius: 12px;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
border-style:none;
margin: 20px 0 40px 0;
}

`;