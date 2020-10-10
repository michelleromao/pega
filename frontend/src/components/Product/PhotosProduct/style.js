import styled, { keyframes } from 'styled-components';


export const PhotosProductContent = styled.div`
  display: flex;
  flex-flow: row;
  width: 63%;
  height: 436px;
  justify-content: space-between;

  div {
    border-radius: 10px;
    cursor: pointer;
    width: 35%;
  }

  .active {
    width: 70%;
    margin-left: 2%;
    background-size: cover;
  }
  .inactive {
    width: 35%;
    opacity: 0.7;
    margin-left: 2%;
  }
`;
