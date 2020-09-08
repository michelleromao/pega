import styled from 'styled-components'

export const Content = styled.div`
        display: flex;
        flex-direction:column;
        justify-content:space-between;
        border-radius: 12px;    
        border: solid 4px #EA5254;
        width:100%;
        max-width:450px;
        padding: 45px;
        height: 140px;

    }

    h4 {
        font-family:'Poppins';
        font-weight:600;
    }
`

export const CTA = styled.div`
    display: flex;
    flex-direction:row;
    justify-items:flex-start;
`

export const Cancelar = styled.button`
        margin:20px;
        border: none;
        background: transparent;
        font-family: 'Poppins';
        color:#569CCD;
        font-weight:600;        
    }
`

export const Confirmar = styled.button`
        margin:20px;
        background: #EA5254;
        font-family: 'Poppins';
        color:#fff;
        font-weight:600;
        border: solid 0;
        border-radius:6px;
        padding:10px 20px 10px 20px;
    }
`