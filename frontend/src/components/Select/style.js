import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 60%;
`;

export const Label = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => props.fSize};
  color: #000000;
  margin-left: ${(props) => props.marginleft}%;
  margin-bottom: 8.5%;
`;
