import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-flow: column wrap;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Poppins';
  img {
    max-width: 100%;
  }
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #202020;
    margin: 3% 0 5% 0;
  }
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;

export const ContentSale = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 52%;
`;
export const Promo = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  text-decoration-line: line-through;
  color: #424242;
`;
export const Price = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #569ccd;
`;
