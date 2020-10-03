import styled from 'styled-components';

export const Label = styled.label`
  background: #ffffff;
  border: 1px solid #569ccd;
  box-sizing: border-box;
  border-radius: 10px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  margin-bottom: 15%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;
