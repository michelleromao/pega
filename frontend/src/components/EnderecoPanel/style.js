import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px #569CCD;
    border-radius: 12px;
    padding: 25px;
    height: 130px;
    width:100%; 
    max-width:720px;
    margin-bottom:20px;
`

export const Title = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    margin-bottom: 15px;

    h3 {
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 16px;
        color: #569CCD;
    }

`
export const Infos = styled.div`
        display: flex;
        flex-direction:column;
        justify-content: space-between;

    span {
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 14px;
        color: #797979;
        margin-bottom: 5px;
    }

    h4 {
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 16px;
        color: #202020;
        margin-bottom: 5px;
    }

`
export const Actions = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
`

export const Editar = styled.button`
        border: none;
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 16px;
        color: #569CCD;
        background: none;
`

export const Excluir = styled.button`
    border: none;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 16px;
    color: #EA5254;
    background: none;

`

export const Username = styled.div`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 20px;
    color: #569CCD;
`