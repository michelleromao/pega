import styled from 'styled-components';

export const Container = styled.div`
  width: 32%;
  height: 436px;
  display: flex;
  flex-flow: column;
`;
export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    color: #202020;
  }
  img {
    cursor: pointer;
  }
`;

export const ContentDetails = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 5%;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #202020;
  }
`;

export const ContentChoices = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-top: 8%;
  margin-bottom: 10%;
  p {
    margin-top: 5%;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #202020;
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  img {
    margin-right: 4%;
  }
`;
export const Frete = styled.h5`
  margin-top: 2%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #202020;
  span {
    color: #569ccd;
  }
`;
export const ContentSale = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

export const ContentPrice = styled.div`
  display: flex;
  flex-flow: column;
  width: 40%;
`;

export const Promo = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-decoration-line: line-through;
  color: #424242;

`;
export const Price = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #569ccd;
  margin-top: 5%;

`;

export const Method = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #202020;
`;

export const Button = styled.button`
  cursor: pointer;
  ${(props) =>
    props.btnBuy
      ? `height: 54px;
  margin-top: 8%;
  background: #be5599;
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  border: 1px solid transparent;`
      : `height: 54px;
  margin-top: 4%;
  background: transparent;
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #569ccd;
  border: 1px solid #569ccd;`}
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;

export const Receive = styled.p`
  margin-top: 5%;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #c4c4c4;
`;
