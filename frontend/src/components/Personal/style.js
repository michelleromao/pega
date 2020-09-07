import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
`;

export const Title = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #202020;
  margin: 3% 0 2% 0;
  align-items: center;
  width: 61%;
`;

export const FirstSection = styled.div`
  display: flex;
  align-items: center;
  width: 61%;
`;

export const PhotoContent = styled.div`
  img {
    width: 89px;
    height: 89px;
  }
  display: flex;
  flex-flow: column;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export const Action = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  color: ${(props) => props.color};
  margin-top: 5%;
`;

export const Username = styled.div`
  margin: -2% 0 0 3%;
  display: flex;
  flex-flow: column;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }
`;
export const Label = styled.p`
  color: #202020;
`;
export const User = styled.p`
  color: #b8b8b8;
`;

export const SecondSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 3%;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const Button = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #569ccd;
  background: none;
  border: none;
  :hover {
    color: rgba(86, 156, 205, 0.8);
  }
`;

export const ContentButton = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 0% 3% 2% 0;
  Button:first-child {
    color: #ea5254;
  }
`;

export const Delete = styled.p`
  align-self: initial;
  margin: 5% 0% 0 52%;
  a {
    color: #569ccd;
    text-decoration: none;
    :hover {
      transition: 0.3s;
      color: #ea5254;
      text-decoration: underline;
    }
  }
`;
