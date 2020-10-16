import styled from 'styled-components';

export const LogoContent = styled.div`
  width: 100%;
  padding: 2% 0 0 0;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
`;
export const Illustration = styled.div`
  width: 0%;
  align-self: center;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`;
export const Title = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  align-self: flex-end;
  margin: 0 10.7% 2% 0;
`;

export const Form = styled.form`
  width: 40%;
  margin-bottom: 5%;
  padding: 4% 0 5% 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: #ffffff;
  border: 2px solid #be5599;
  box-sizing: border-box;
  border-radius: 12px;
  a {
    text-decoration-line: underline;
    color: #569ccd;
    :hover {
      text-decoration-line: none;
      color: rgba(86, 156, 205, 0.8);
    }
  }
`;
export const Terms = styled.p`
  width: 70%;
  align-self: center;
  margin: 0 0 5% 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;

export const Login = styled.p`
  text-align: center;
  margin: 5% 0 -5% 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
