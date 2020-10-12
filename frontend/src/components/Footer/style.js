import styled from 'styled-components';

export const Container = styled.footer`
width: 100%;
  display: flex;
  flex-flow: column;`;
export const FooterRow = styled.div`
display: flex;
  flex-flow: row;
  justify-content: space-between;
  background-color: #fff;
`;
export const FooterColumn = styled.div`
 display: flex;
  flex-flow: column;
  h2 {
  font-style: normal;
  font-weight: bold;
  font-family: 'Poppins';
  font-size: 20px;
  line-height: 120%;
  color: #83bde6;
  margin-bottom: 10%;
}
ul li {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #4e4e4e;
  margin-top: 10%;
}
`;
export const ColumnContent = styled.div`
 display: flex;
  flex-flow: column;
  h2:nth-last-child(2) {
  margin-top: 15%;
}
ul li {
  margin-top: 0;
}

`;
export const Line = styled.div`
width: 100%;
  height: 1px;
  background-color: #797979;
  margin-top: 5%;
  margin-bottom: 2%;
`;
export const Credits = styled.div`
 display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  color: #797979;
  margin-bottom: 5%;
  }
`;
