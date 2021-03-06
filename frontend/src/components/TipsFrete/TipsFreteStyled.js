import styled from 'styled-components';

export const TipsFreteStyled = styled.div`
  width: 418px;
  height: 571.5px;
  border: 2px solid #569ccd;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin: 5% 0 5% 0;
  .titulo {
    width: 418px;
    height: 129px;
    background: #569ccd;
    overflow: hidden;
    margin: 0;
    display: flex;
    justify-content: center;
    border-radius: 6px 6px 0px 0px;
  }
  .titulo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%;
    margin: 0%;
  }
  .titulo div p {
    display: inline !important;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #ffffff;
    text-align: center;
    line-height: 2em;
  }
  .titulo div p strong {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
  .bordaLista {
    position: absolute;
    height: 355px;
    border-left: 4px solid #569ccd;
    margin-top: 45px;
    margin-left: 40px;
  }
  .lista {
    position: absolute;
    margin-top: 20px;
  }
  .lista ul {
    list-style-type: none;
    padding-left: 30px;
    padding-right: 30px;
  }
  .lista ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 20px;
  }
  .orderList {
    background-color: #569ccd;
    color: white;
    border-radius: 100%;
    min-width: 25px;
    min-height: 25px;
    text-align: center;
    margin-right: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .listText {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #be5599;
    height: auto;
    padding-right: 20px;
  }
`;
