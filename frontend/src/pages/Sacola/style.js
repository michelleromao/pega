import styled from 'styled-components';

export const Breadcrumb = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  width: 100%;
  margin: 3% 0 5% 0;
  a {
    color: #878787;
  }
`;

export const Stage = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.color};
  margin: 0 1% 0 1%;
  cursor: pointer;
  :first-child {
    margin-left: 0%;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  margin-bottom: 10%;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column;
  width: 38%;
  margin-left: 5%;
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
