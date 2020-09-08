import styled from 'styled-components';

export const Breadcrumb = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  width: 100%;
  margin: 3% 0 5% 0;
  a {
    color: #878787;
  }
`;

export const Stage = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.color};
  margin: 0 1% 0 1%;
  cursor: pointer;
  :first-child {
    margin-left: 0%;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  margin-bottom: 10%;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column;
  width: 38%;
  margin-left: 5%;
`;
