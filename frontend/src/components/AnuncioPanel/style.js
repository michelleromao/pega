import styled from 'styled-components';

export const Content = styled.div`
        display: flex;
        flex-direction: row;
        font-family: 'Poppins';
        justify-content: space-between;
        align-items: center;
        width:100%;
        max-width:720px;
        height: 40px;
        border: solid 1px #569CCD;
        border-radius: 6px;
        padding: 20px;
        margin-bottom:20px;
`;

export const ProductDetail = styled.div`
        display: flex;
        align-items: center;
    img {
        width: 50px;
        height: 60px;
        border-radius:20%;
        margin-right: 10px;
    }
`;
export const NamePrice = styled.div`
`;
export const Name = styled.h4`
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 14px;
        color: #202020;
        margin-button: 15px;
`;
export const Price = styled.h4`
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 16px;
        color: #202020;
`;
export const Actions = styled.div`
        display: flex;
        flex-direction: row;
        width: 100px;
        align-items:center;
        justify-content: space-between;
        width: 280px;
    a {
        color: #EA5254;
        font-family:'Poppins';
        font-weight:500;
        font-size: 16px;
    }
`;

export const Editar = styled.div`
    a {
        color: #569CCD;
    }
`
export const Pausar = styled.button`
  border: solid 2px #EA5254;
  background: none;
  color: #EA5254;
  font-family:'Poppins';
  font-weight:500;
  font-size: 16px;
  border-radius: 6px;
  padding: 5px 25px 5px 25px;
`;

export const Excluir = styled.button`
  color: #EA5254;
  font-family:'Poppins';
  font-weight:500;
  font-size: 16px;
  background-color: white;
  border: none;

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
  padding:20px;
  border: 1px solid #569ccd;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  flex-flow: column;
  width: 50%;
  justify-content: space-around;
  align-items: center;
  h4 {
    font-family:'Poppins';
    font-weight: 600;
    font-size: 18px;
    color: #202020;
    margin-bottom: 6px;
    }
`;

export const CTAModal = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        width:90%;

    a {
        font-size: 16px;
        color: #569CCD;
        font-weight:500;
        font-family:'Poppins';
    }

    button {
        font-size: 16px;
        padding:15px;
        width:200px;
        background: #EA5254;
        border-radius:6px;
        border: none;
        font-family:'Poppins';
        color: #fff;
        font-weight:500;
    }

    button:hover {
        cursor: pointer;
    }

`;
