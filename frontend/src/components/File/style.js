import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const Label = styled.label`
  background: #ffffff;
  border: 1px solid #569ccd;
  box-sizing: border-box;
  border-radius: 10px;
  height: 307px;
  width: 70%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;

export const ContentPhotos = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 25%;
`;
export const Photo = styled.div`
  width: 100%;
  height: 30%;
  background: #ffffff;
  border: 1px solid #569ccd;
  box-sizing: border-box;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;
