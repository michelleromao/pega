import styled from 'styled-components';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => props.fSize};
  color: #000000;
  margin-left: ${(props) => props.marginleft}%;
  margin-bottom: 5%;
`;

export const InputContainer = styled(ReactInputMask)`
  width: ${(props) => props.size};
  height: 50px;
  background: #ffffff;
  border: 2px solid ${(props) => props.color};
  border-radius: 6px;
  padding-left: 3%;
  margin-bottom: ${(props) => props.marginBottom};
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

export const TextAreaContainer = styled.textarea`
  width: ${(props) => props.size};
  background: #ffffff;
  border: 2px solid ${(props) => props.color};
  border-radius: 6px;
  padding-left: 2%;
  margin-bottom: ${(props) => props.marginBottom};
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  resize: none;

  color: #000;
  :required:focus {
    border: 2px solid #ea5254;
    outline: none;
  }
`;
