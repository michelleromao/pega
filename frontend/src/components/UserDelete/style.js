import styled from 'styled-components';

export const Exclusao = styled.div`
        display: flex;
        flex-direction: column; 
        justify-content: space-between;
        width: 100%;
        max-width:700px;  
        min-height:250px;      
        height: 100%;
        border: solid 2px #EA5254;
        border-radius: 12px;
        padding:25px;
        margin-right:20px;
        margin-bottom:50px;
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
        width: 96%;
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

    a {
        font-family:'Poppins';
        font-weight:500;
        color:#569CCD;
        font-size:12px;
    }
` 


export const InfoExclusao = styled.div`
    
`
export const FinalizarExclusao = styled.div`
        display: flex;
        flex-direction:row;
        justify-content: space-between;
    }
`

export const User = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items:center;
    }

    img {
        margin-right: 10px;
        width: 60px;
        height: 60px;
    }
` 

export const UserInfos = styled.div`
    }
    p {
        font-weight:500;
        font-size:14px;
        color: #202020;
        margin-bottom:10px;
        font-family:'Poppins';
    }

    span {
        font-family:'Poppins';
        color: #B8B8B8;
        font-size:12px;
    }
`
export const CTAExclusao = styled.div`
    p {
        font-weight:500;
        font-size:14px;
        color: #202020;
        margin-bottom:10px;
    }
    button {
        padding: 15px;
        background: #EA5254;        
        border: none;
        border-radius: 6px;
        color: #fff;
        font-family:'Poppins';
        font-weight:500;
        margin-bottom:10px;
    }

    button:hover {
        cursor: pointer;
    }
`

export const TextRed = styled.p`      
        font-weight:500;
        font-size:16px;
        color: #EA5254;
        margin-bottom: 10px;
    }
`

export const Text = styled.p`
        font-weight:500;
        font-size:14px;
        color: #202020;
    }   
`

export const WDelete = styled.div`
        display: flex;
        flex-direction: column; 
        justify-content: flex-start;
        width: 100%;
        max-width:700px;       
        height: 390px;
        border: solid 2px #EA5254;
        border-radius: 12px;
        padding: 25px;
        margin-right:20px;
        margin-bottom:50px;
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
    a {
        color: blue;
    }

    textarea {
        margin-top:20px;
        margin-bottom: 20px;
        width: 96%;
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
    
`

export const CTAModal = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        width:90%;
    }

    a {
        font-size: 16px;
        color: #569CCD;
        font-weight:500;
        font-family:'Poppins';
    }

    button {
        font-size: 16px;
        padding:15px;
        width:200px;
        background: #EA5254;
        border-radius:6px;
        border: none;
        font-family:'Poppins';
        color: #fff;
        font-weight:500;
    }

    button:hover {
        cursor: pointer;
    }

`
export const CTA = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
    }

    a {
        font-size: 16px;
        color: #569CCD;
        font-weight:500;
        font-family:'Poppins';
    }

    button {
        font-size: 16px;
        padding:15px;
        width:200px;
        background: #EA5254;
        border-radius:6px;
        border: none;
        font-family:'Poppins';
        color: #fff;
        font-weight:500;
    }

    button:hover {
        cursor: pointer;
    }

`
export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const Paper = styled.div`
  background-color: white;
  height: 293px;
  padding:20px;
  border: 1px solid #569ccd;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  flex-flow: column;
  width: 45%;
  justify-content: space-around;
  align-items: center;
}
  h4 {
    font-family:'Poppins';
    font-weight: 600;
    font-size: 18px;
    color: #202020;
    margin-bottom: 6px;
    }
`;