import styled from 'styled-components';

export const Content = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom:20px;
    }
` 

export const Item = styled.button`
        border: solid 2px #569CCD;
        border-radius: 12px;
        background: none;
        padding: 5px 25px 5px 25px;
        margin-right: 10px;    
        color: #569CCD;
        font-family: 'Poppins';
        font-weight:500;
    }
    :hover {
        opacity: 90%;
        cursor: pointer;
    }

    :focus {
        background:#569CCD;
        color: #fff;
    }
` 

