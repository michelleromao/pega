import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column;
`;

export const Title = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
color: #202020;

`;

export const textTitle = styled.p`
  margin-top: 2%;
`;
export const Seller = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #569ccd;
  width: 55%;
  a {
    text-decoration-line: underline;
    color: #ea5254;
  }
`;

export const Contact = styled.p`
  border-radius: 31px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #569CCD;
  border: none;
  margin-top: 1%;

  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;

export const Content = styled.div`
  margin-top: 2%;
  padding: 2% 0 0 2%;
  border: 2px solid #e9e9e9;
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
`;
