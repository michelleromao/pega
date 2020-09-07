import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 30%;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    color: #569ccd;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-top: 8%;
  img {
    width: 41.5%;
  }
  img:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 5%;
`;
export const Row = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  h5 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #202020;
    cursor: pointer;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #202020;
  }
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;
    text-align: center;
    color: #000000;
    cursor: pointer;
  }
`;
