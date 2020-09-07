import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 26px;
    font-weight: 600;
    font-family: 'Poppins';
    color: #569ccd;
    margin-bottom: 20px;
  }
`;
export const TextArea = styled.div`
  border: solid 1px #569ccd;
  border-radius: 16px;
  width: 600px;
  height: 100px;
  padding: 20px;
  textarea {
    outline: none;
    border: none;
    width: 100%;
    height: 60px;
    resize: none;
    font-weight: 400;
    font-family: 'Poppins';
    font-size: 14px;
  }
`;
export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  input {
    background: #569ccd;
    color: #fff;
    padding: 5px 25px 5px 25px;
    border: none;
    border-radius: 36px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins';
    transition: 0.4s;
    cursor: pointer;
  }
  input:focus {
    outline: none;
  }
  input:hover {
    transition: 0.4s;
    opacity: 90%;
  }
`;

export const Tags = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  button {
    background: none;
    padding: 5px 25px 5px 25px;
    border: solid 1px #569ccd;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins';
    transition: 0.4s;
    color: #569ccd;
    margin: 0 20px 0 0;
  }
`;

export const ContentComments = styled.div`
  margin-top: 20px;
`;
