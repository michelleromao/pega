import styled from 'styled-components'

export const WDelete = styled.div`
        display: flex;
        flex-direction: column; 
        justify-content: flex-start;
        width: 100%;
        max-width:630px;        
        height: 390px;
        border: solid 2px #EA5254;
        border-radius: 12px;
        padding: 25px;
    }

    form {       
        margin-top:20px;        
        display: flex;
        flex-direction:column; 
        color: #ccc;
        font-family: 'Poppins';
        color: #202020;
        font-size: 13px;
        font-weight:600;
    }

    label {
        display: flex;
        align-items: baseline;
    }

    input {
        margin:10px 10px 0 0;
    }
    span {
        color: blue;
    }

    textarea {
        margin-top:20px;
        margin-bottom: 20px;
        width: 340px;
        height: 100px;
        border: solid 2px #EA5254;
        border-radius:6px;
        resize:none;
        padding:10px;
        font-family: 'Poppins';
    }

    h5 {
        font-family: 'Poppins';
        font-size: 17px;
        color: #EA5254;
        line-height:1.4em;
    }
    
    button {
        padding:15px;
        width:100px;
        background: #EA5254;
        border-radius:6px;
        border: none;
        font-family:'Poppins';
        color: #fff;
        font-weight:500;
    }
`

export const Title = styled.div`
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
    }

    h4 {
        font-family:'Poppins';
        font-weight: 600;
        font-size: 22px;
        color: #202020;
        margin-bottom: 6px;
    }

    span {
        font-family:'Poppins';
        font-weight:500;
        color:#569CCD;
        font-size:12px;
    }
`