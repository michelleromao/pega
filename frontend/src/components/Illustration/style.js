import styled from 'styled-components';

export const Container = styled.div`
  width: 46%;
  height: 232px;
  display: flex;
  flex-flow: row;
  align-items: center;
  font-family: Poppins;
`;
export const Content = styled.div`
  display: flex;
  flex-flow: column;
  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 120%;
    color: #83bde6;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 120%;
    color: #83bde6;
    margin-top: 10%;
  }
`;
