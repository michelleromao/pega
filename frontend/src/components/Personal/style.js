import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width:720px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export const Title = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #202020;
  margin: 3% 0 2% -4%;
  align-items: center;
  width: 61%;
`;

export const FirstSection = styled.div`
  display: flex;
  align-items: center;
  width: 61%;
  margin-bottom: 3%;
  color: #202020;

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
    color: #202020;

  }
`;
export const Label = styled.p`
`;
export const User = styled.p`
`;

export const SecondSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width:762px;
  margin-bottom: 2%;

  input {
    height:40px;
    width:350px;
  }

  label {
    margin-bottom:2%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width:762px;
  margin-right:5%;
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
  flex-direction: row;
  justify-content: space-between;
  margin: 0% 3% 2% 0;
  width:762px;
  Button:first-child {
    color: #ea5254;
  }
`;

export const Delete = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:60%;
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
