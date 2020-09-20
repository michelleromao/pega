import styled from 'styled-components';

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 10px 5px 10px 5px;
  }
`
export const Brand = styled.div`
    svg {
        fill: #569ccd;
        transition: 0.5s;
    }
    
    svg:hover {
        opacity: 90%;
        transition: 0.5s;
        cursor: pointer;
    }    
`

export const Categorias = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }

    p {
        font-family: 'Poppins';
        font-size: 14px;
        font-weight: 600;
        color: #202020;
    }
    svg {
        padding: 5px;
      }    
`

export const Search = styled.div`
        margin: 0 15px 0 15px;
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        border: 0px solid;
        padding: 0 15px 0 15px;
        border-radius: 6px;
        max-width: 441px;
        width: 100%;
    }
    
    input {
        border: none;
        background-color: #f0f0f0;
        height: 47px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        outline: none;
        font-family: 'Poppins';
    }

    input::placeholder {
        color: #949494;
        transition: 0.3s;
    }

    input:focus::placeholder {
        opacity: 60%;
        transition: 0.3s;
    }

    svg {
        fill: #ccc;
        transform: rotate(-7deg);
        stroke: #ccc;
        stroke-width: 1px;
        width: 40px;
    }

    svg:hover {
        opacity: 90%;
        cursor: pointer;
    }
` 

export const ctaVender = styled.button`
    margin: 0 15px 0 5px;
    background: #be5599;
    color: #fff;
    font-weight: 500;
    border-radius: 31px;
    border: none;
    padding: 5px 40px 5px 40px;
    transition: 0.3s;
    font-family: 'Poppins';

    :hover {
        opacity: 94%;
        cursor: pointer;
        transition: 0.3s;
    }

    :focus {
        outline-color: none;
        outline: none;
    }      
`

export const Nologgedin = styled.div`
    p {
        margin-bottom: 5%;
    }

    a {
        margin: 0 0 0 0;
        font-size: 12px;
        color: #569ccd !important;
    }

    a:hover {
        transition: 0.3s;
        color: rgba(86, 156, 205, 0.8) !important;
    }
`

export const Usuario = styled.div`
    img {
        padding: 4px;
        width: 30px;
        height: 30px;
        border-radius: 50px;
    }

    p {
        font-family: 'Poppins';
        font-size: 14px;
        font-weight: 600;
        color: #202020;
    }

`

export const Sacola = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
  }

  svg {
    fill: #202020;
    width: 25px;
    stroke: #202020;
    stroke-width: 1.8px;
  }
`