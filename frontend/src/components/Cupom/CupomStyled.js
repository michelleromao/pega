import styled from 'styled-components';

export const CupomStyled = styled.div`
    width: 418px;
    height: auto;
    box-sizing: border-box;
    p{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #569CCD;
        box-sizing: border-box;
        margin:0;
    }
    ul{
        display:flex;
        flex-direction: row;
        list-style: none;
        padding: 0;
        box-sizing: border-box;
        margin:0;
        margin-top: 10px;
    }
    ul li{
        display: flex;
        align-items: center;
    }
    ul li input{
        width: 252px;
        height: 46px;
        background: #FFFFFF;
        border: 2px solid #569CCD;
        box-sizing: border-box;
        border-radius: 6px;
        margin-right: 20px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.1em;
        color: black;
        padding-left: 20px;
        padding-right: 20px;
    }
    ul li input::placeholder {
        text-align: center;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.1em;
        color: #B8B8B8;
    }
    ul li button {
        width: 144px;
        height: 46px;
        background: #569CCD;
        border-style: none;
        border-radius: 6px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #FFFFFF;
    }



`;