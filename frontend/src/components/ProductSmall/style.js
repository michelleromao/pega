import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props) => props.width};
  opacity: ${(props) => props.notLink ? 0.5 : 1};
  display: flex;
  flex-flow: column wrap;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Poppins';
  margin-right: 10%;
  img {
    max-width: 100%;
    border-radius: 5px;
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
    transition: 0.3s;
    opacity: ${(props) => props.notLink ? 0.5 : 0.9};

  }
`;

export const ContentSale = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 70%;
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
  margin-bottom: 10%;
`;
