import styled from 'styled-components';

export const LogoContent = styled.div`
  width: 100%;
  padding: 2% 0 0 0;
`;
export const Title = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  align-self: center;
  margin-bottom: 2%;
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: #ffffff;
  border: 2px solid #be5599;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 4% 0 5% 0;
  margin-bottom: 5%;
  a {
    text-decoration-line: underline;
    color: #569ccd;
    :hover {
      text-decoration-line: none;
      color: rgba(86, 156, 205, 0.8);
    }
  }
`;

export const Help = styled.p`
  margin-top: 10%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
export const Signin = styled.p`
  margin-top: 5%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
