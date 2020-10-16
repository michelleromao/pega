import styled from 'styled-components';

export const Sidebar = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 260px;
        background-color: #83BDE6;   
        border-radius: 12px; 
        height: 100%;
        padding: 50px 0 50px 10px;
    }

    img {
        width: 120px;
        border: solid 5px #fff;
        border-radius: 50%;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height:440px;
        margin-top:40px;
        width: 250px;
        display: flex;
        flex-direction: column;
        text-align: right;
    }

    li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: 'Poppins';
        color: #fff;    
        font-size: 15px;
        height: 20px;
        padding: 15px 0 15px 35px;   
    }   
    li:hover{
        background:#fff;
        color: #83BDE6;
        cursor: pointer;
        border-radius:10px 0 0 10px;
        transition: 0.2s;
    } 
    li:focus{
        background:#fff;
        color: #83BDE6;
        cursor: pointer;
        border-radius:10px 0 0 10px;
    }
`
export const Hove = styled.div`
        padding: 15px 0 15px 15px;  
        height: 20px;
        background-color:#fff;
        border-radius: 7px 0 0 7px;
    }
`

