import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 90%;
  border: 1px solid #569ccd;
  margin: 2% 0 5% 0;
  padding: 5%;
  border-radius: 12px;
`;

export const Title = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #202020;
  margin-bottom: 5%;
`;

export const ContentPhoto = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row;
`;

export const ContentAbout = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 8%;
`;

export const CollumnOne = styled.div`
  width: 35%;
  display: flex;
  flex-flow: column;
`;
export const CollumnTwo = styled.div`
  width: 62%;
  display: flex;
  flex-flow: column;
`;

export const ContentAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
`;
export const Button = styled.button`
  border: ${(props) => `1px solid ${props.border}`};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-radius: 8px;
  width: ${(props) => props.size};
  height: 47px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;
