import styled from 'styled-components';

export const Button = styled.div`
  width: 18.5%;
  height: 69px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid #797979;
  color: #797979;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-left: 8%;
  }
  :hover {
    border: 2px solid #be5599;
    color: #be5599;
    transition: 0.2s;
  }
`;
