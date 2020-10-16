import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 20px;
  margin-top: 2%;
`;
export const Content = styled.div`
  display: inline-block;
  position: relative;
  figcaption {
    position: absolute;
    top: 30%;
    left: 30%;
    display: flex;
    flex-flow: column;
    width: 40%;
    align-items: center;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 120%;
    text-align: center;
    color: #ffffff;
    margin-bottom: 10%;
  }
  button {
    width: 274px;
    height: 49px;
    background: #ffffff;
    border-radius: 31px;
    border: 1px solid transparent;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
    color: #87b1cf;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
