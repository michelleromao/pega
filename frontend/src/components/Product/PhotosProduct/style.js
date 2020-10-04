import styled, { keyframes } from 'styled-components';

const fadeInOpcity = keyframes`
 from {
  width: 35%;
}
to {
  width: 70%;
}`;

export const PhotosProductContent = styled.div`
  display: flex;
  flex-flow: row;
  width: 63%;
  height: 436px;
  justify-content: space-between;
  div {
    border-radius: 10px;
    cursor: pointer;
  }

  .active {
    width: 70%;
    margin-left: 2%;
  }
  .inactive {
    width: 35%;
    opacity: 0.7;
    margin-left: 2%;
    animation-name: ${fadeInOpcity};
    animation-timing-function: ease-in;
    animation-duration: 0.8s;
  }
`;
