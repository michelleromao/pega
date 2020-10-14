import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    border:solid 1px #569CCD;
    border-radius:12px;
    max-width:1060px;
    width:100%;
    padding:30px;
    margin-bottom:30px;
    margin-top:30px;

` 
export const Title = styled.div`
    font-family:'Poppins';

    h4 {        
        font-weight:600;
        font-size:20px;
        margin-bottom:20px;
    }

    h5 {
        font-weight:600;
        font-size:14px;
    }
`

export const BoxCategorias = styled.div`
    display: flex;
    justify-content: center;
    margin-top:20px;
`

export const Categorias = styled.div`
    display: flex;
    flex-direction: row; 
    flex-wrap:wrap;
    width:100%;
    max-width:750px;

    div {
        margin:10px;
    }
`

export const Categoria = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    border:solid 2px #949494;
    border-radius: 6px;
    width:100px;
    height: 40px;
    background:transparent;
    margin: 10px;

    :hover {
        cursor: pointer;
    }

    :focus {
        border: solid 2px #BE5599;
        fill: #BE5599;
        svg {
            fill:#BE5599;
        }
        color: #BE5599;
    }

    h4 {
        font-weight:500;
        font-size: 14px;
        
    }
    svg:focus {
        fill: #BE5599;
    }
    svg {
        fill:#949494;
        width:50px;
        margin-right:5px;
    }
`

export const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Actions = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a {
        font-size: 16px;
        font-weigh:500;
        color:#569CCD;
        margin-right:25px;
    }

    button {
        font-size:16px;
        font-weigh:500;
        background:#569CCD;
        color: #fff;
        border-radius:6px;
        border: none;
        padding:10px 20px 10px 20px;
    }
` 

