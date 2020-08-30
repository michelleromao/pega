import styled from 'styled-components';

export const Label = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  margin: 0 0 5% -41%;
`;
export const InputContainer = styled.input`
  width: ${(props) => props.size};
  height: 50px;
  background: #ffffff;
  border: 2px solid ${(props) => props.color};
  border-radius: 6px;
  padding-left: 8%;
  margin-bottom: 15%;
  align-self: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #000;
  :required:focus {
    border: 2px solid #ea5254;
    outline: none;
  }
`;
