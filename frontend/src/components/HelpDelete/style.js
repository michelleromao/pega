import styled from 'styled-components';

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const Title = styled.h4`
    font-family:'Poppins';
    font-weight:500;
    font-color:#202020;
    font-size:20px;
    text-align:left;
`

export const Links = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column; 
    text-align:left;

    a {
        font-family:'Poppins';
        margin-bottom:5px;
        font-weight:500;
        font-size:16px;
        color:#569CCD;
    }
` 
