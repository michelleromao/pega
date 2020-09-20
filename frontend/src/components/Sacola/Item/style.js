import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  margin-bottom: 5%;
`;

export const ContentPhoto = styled.div`
  width: 20%;
  display: flex;
  flex-flow: column;
  img {
    width: 109px;
    height: 109px;
  }
`;

export const Button = styled.button`
  margin-top: 15%;
  cursor: pointer;
  width: 70%;
  height: 40px;
  display: flex;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => props.color};
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 60%;
`;

export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3%;
`;

export const Title = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #569ccd;
`;

export const AddMore = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 25%;
`;

export const ButtonAction = styled.button`
  width: 25%;
  height: 26px;
  background: ${(props) => props.background};
  border-radius: 6px;
  border: none;
  color: #fff;
  font-weight: bolder;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;

export const Quantity = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

export const ContentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  width: 63%;
  margin-bottom: 3%;
`;

export const Detail = styled.p`
  color: #202020;
`;

export const DetailUnique = styled.p`
  font-weight: 600;
  color: #ea5254;
`;

export const ContentPrice = styled.div`
  display: flex;
  flex-flow: column;
  font-family: Poppins;
  font-style: normal;
`;

export const Price = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: line-through;
  color: #424242;
`;

export const Promo = styled.div`
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  color: #569ccd;
`;
