import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 90%;
  border: 1px solid #569ccd;
  margin: 2% 0 5% 0;
  padding: 5%;
  border-radius: 12px;
`;

export const Title = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #202020;
  margin-bottom: 5%;
`;

export const ContentPhoto = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;
export const ContentResume = styled.div`
  display: flex;
  flex-flow: column;
  width: 25%;
`;
export const ContentAbout = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 8%;
`;

export const CollumnOne = styled.div`
  width: 35%;
  display: flex;
  flex-flow: column;
`;
export const CollumnTwo = styled.div`
  width: 62%;
  display: flex;
  flex-flow: column;
`;

export const ContentAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
`;
export const Button = styled.button`
  border: ${(props) => `1px solid ${props.border}`};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-radius: 8px;
  width: ${(props) => props.size};
  height: 47px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
export const Paper = styled.div`
  background-color: white;
  height: 293px;
  border: 1px solid #569ccd;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  flex-flow: column;
  width: 40%;
  justify-content: space-around;
  align-items: center;
`;
export const TitleModal = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #be5599;
`;
export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
`;
export const TextModal = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #202020;
  margin-bottom: -5%;
`;
export const Bold = styled.span`
  font-weight: bolder;
`;


export const Load = styled.img`
width: 100px;
animation: ${rotate} 2s linear infinite;
`;
