import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin: 2% 0 2% 0;
`;
export const Cover = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 100%;
  height: 234px;
  border-radius: 10px;


`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:  100%;

`;

export const Photo = styled.div`
  margin: -8% 0 0 5%;
img{
  border: 6px solid #FFFFFF;
  background-color: #FFFFFF;
  border-radius: 100px;
}

`;
export const About = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

`;
export const Name = styled.div`
  margin-left: -25%;

  h2{
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 54px;
    text-align: center;
    color: #569CCD;
  }`;

export const Username = styled.div`
  margin-left: -25%;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  color: #797979;
`;

export const Rate = styled.div`
  display: flex;
  width: 15%;

`;
export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;

`;
export const Button = styled.button`
  width: 20%;
  background: #fff;
  border: 1px solid #569CCD;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  padding: 0.3%;
`;

export const Container = styled.div`
  width: 98%;
  display: flex;
  padding-left: 10%;
`;
export const Items = styled.div`
  width:100%;
  display: flex;
  flex-flow: row wrap;
`;


export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const Load = styled.img`
  width: 100px;
  animation: ${rotate} 2s linear infinite;
`;

