import styled from 'styled-components';

export const Container = styled.button`
  min-width: 17%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: ${(props) => props.background};
  border: 2px solid ${(props) => props.border};
  margin-left: 2%;
  cursor: pointer;
  :hover {
    transition: 0.3s;
    opacity: 0.8;
  }
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 6%;
`;
