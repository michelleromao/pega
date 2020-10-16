import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 85%;
  height: 70px;
  background: #ffffff;
  border: 2px solid #ea5254;
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 5%;
  img {
    margin-right: 10%;
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    width: 70%;
  }
`;
