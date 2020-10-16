import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px #569CCD;
    max-width: 480px;
    width: 100%;
    max-height: 600px;
    padding: 30px;    
    border-radius:12px;
`
export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Endereco = styled.label`
        display: flex;
        flex-direction: column;
        input {
            width: 348px;
            height: 30px;
            border: solid 1px #569CCD;
            border-radius: 6px;
        }
`

export const Numero = styled.label`
        display: flex;
        flex-direction: column;
        input {
            width: 100px;
            height: 30px;
            border: solid 1px #569CCD;
            border-radius: 6px;
        }
`

export const Complemento = styled.label`
        display: flex;
        flex-direction: column;
        input {
            width: 300px;
            height: 30px;
            border: solid 1px #569CCD;
            border-radius: 6px;
        }
`

export const Bairro = styled.label`
        display: flex;
        flex-direction: column;
        input {
            width: 148px;
            height: 30px;
            border: solid 1px #569CCD;
            border-radius: 6px;
        }
`
export const Estado = styled.label`
        display: flex;
        flex-direction: column;
        input {
            width: 116px;
            height: 30px;
            border: solid 1px #569CCD;
            border-radius: 6px;
        }
`
export const Cidade = styled.label`
        display: flex;
        flex-direction: column;
        input {
            width: 330px;
            height: 30px;
            border: solid 1px #569CCD;
            border-radius: 6px;
        }
`

export const Pais = styled.label`
        display: flex;
        flex-direction: column;
        input {
            width: 100px;
            height: 30px;
            border: solid 1px #569CCD;
            border-radius: 6px;
        }
`

export const Formulario = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
    
    label {
        margin-bottom: 20px;
        font-family:'Poppins';
        font-weight: 600;
        font-size: 14px;
    }
    
    input {
        margin-top: 7px;
        height: 45px;
        font-family:'Poppins';
        padding: 0 0 0 8px;
        border-radius: 12px;
    }
`
export const Title = styled.h4`
    font-family: 'Poppins';
    font-size: 18px;
    color: #569CCD;
    font-weight:600;
`
export const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Cep = styled.label`   
    display: flex;
    flex-direction: column;

    input {
        width: 120px;
        border: solid 1px #569CCD;
    }
`

export const Check = styled.label`
        display: flex;
        flex-direction: row;
        align-items: center;
`
export const Voltar = styled.button`
    background: none;
    border-radius: 6px;
    border: none;
    padding: 8px 25px 8px 25px;
    font-family:'Poppins';
    font-weight:500;
    color: #569CCD;` 

export const Adicionar = styled.button`
    background: #569CCD;
    border-radius: 6px;
    border: none;
    padding: 8px 25px 8px 25px;
    font-family:'Poppins';
    font-weight:500;
    color: #fff;
` 