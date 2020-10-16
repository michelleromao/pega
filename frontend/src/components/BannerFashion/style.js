import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;

export const ContentVertical = styled.div`
  @media (max-width: 800px) {
    width: 48%;
  }
  width: 22%;
  height: 495px;
  border-radius: 10px;
  background: ${(props) => (props.pink ? '#e076bb' : '#f8f489')};
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
  ${(props) =>
    props.pink
      ? `p {
      @media (max-width: 800px) {
      font-size: 30px;
      }
    margin-top: 15%;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 121%;
    text-align: center;
    color: #fff;
  }`
      : `p {
  @media (max-width: 800px) {
    font-size: 30px;
  }
  margin-top: 15%;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 121%;
  text-align: center;
  color: #be5599;}`}
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 52%;
`;

export const ContentHorizontal = styled.div`
  height: 47%;
  border-radius: 10px;
  background: ${(props) => (props.blue ? '#83bde7' : '#e27475')};
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
  p {
    margin: 15% 0 0 50%;
    font-style: normal;
    width: 30%;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
  }
`;
