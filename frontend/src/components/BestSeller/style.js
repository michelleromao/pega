import styled from 'styled-components';

export const Container = styled.div`
  width: 226px;
  height: 266px;
  display: flex;
  flex-flow: column;
  align-content: center;
  cursor: pointer;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #202020;
    margin-top: 6%;
  }
  :hover img {
    opacity: 0.9;
    transition: 0.3s;
  }
`;
