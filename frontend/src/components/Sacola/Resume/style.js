import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-flow: column;
  border: 2px solid #c367a3;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 5%;
`;

export const Detail = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #797979;
    margin-bottom: 2%;
  }
`;

export const Total = styled.h5`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #be5599;
`;

export const Price = styled.h5`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #569ccd;
`;

export const Line = styled.div`
  height: 0px;
  border: 0.5px solid #be5599;
  margin: 3% 0 10% 0;
`;

export const Button = styled.button`
  width: 100%;
  height: 54px;
  background: #be5599;
  border-radius: 6px;
  border: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;

export const Wait = styled.button`
  width: 100%;
  margin-top: 8%;
  height: 54px;
  border: 2px solid #be5599;
  box-sizing: border-box;
  border-radius: 6px;
  background: #fff;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #be5599;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`;

export const Success = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Text = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #be5599;
  margin-bottom: 10%;
`;
