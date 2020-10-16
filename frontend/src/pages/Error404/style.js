import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  img {
    height: 400px;
  }
  margin-bottom: 10%;
`;
export const Text = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #202020;
  margin: 3% 0 3% 0;
`;

export const Button = styled.button`
  width: 240px;
  height: 60px;
  background: #be5599;
  border-radius: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;
