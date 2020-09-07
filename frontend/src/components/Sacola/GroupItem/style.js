import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column;
`;

export const Title = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
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

export const Contact = styled.button`
  background: #be5599;
  border-radius: 31px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  width: 30%;
  height: 37px;
  cursor: pointer;
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
