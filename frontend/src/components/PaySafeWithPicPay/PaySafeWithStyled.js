import styled from 'styled-components';

export const PaySafeWithStyled = styled.div`
  margin-bottom: 5%;
  p {
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #569ccd;
  }
  .card {
    width: 418px;
    height: 241px;
    background: #569ccd;
    border: 2px solid #569ccd;
    box-sizing: border-box;
    border-radius: 12px;
    margin-top: 15px;
  }
  .buySafe {
    margin-left: 20px;
    margin-top: 20px;
    width: 247px;
    height: 37px;
    background: #ffffff;
    border-radius: 12px;
  }
  .card div p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #569ccd;
    text-align: center;
  }
  .card ul {
    list-style-type: none;
    padding-right: 25px;
    font-family: Poppins;
    text-justify: auto;
    margin-top: 30px;
    padding-left: 20px;
  }
  .card ul li {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
  .listStyle {
    margin-top: 5px;
    background-color: white;
    color: white;
    border-radius: 100%;
    min-width: 10px;
    min-height: 10px;
    max-width: 10px;
    max-height: 10px;
    text-align: center;
    margin-right: 20px;
    box-sizing: border-box;
  }
  .textList {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
  }
`;
