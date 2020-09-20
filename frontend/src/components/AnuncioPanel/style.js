import styled from 'styled-components';

export const Content = styled.div`
        display: flex;
        flex-direction: row;
        font-family: 'Poppins';
        justify-content: space-between;
        align-items: center;
        width:100%; 
        max-width:720px;
        height: 40px;
        border: solid 1px #569CCD; 
        border-radius: 6px;
        padding: 20px;
    }
` 

export const ProductDetail = styled.div`     
        display: flex;
        align-items: center;
                    
    }
    img {
        width: 50px;
        height: 60px;
        border-radius:20%;
        margin-right: 10px;
    }
`
export const NamePrice = styled.div`
        
    }
`
export const Name = styled.h4`
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 14px;
        color: #202020;
        margin-button: 15px;
    }

`
export const Price = styled.h4`
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 16px;
        color: #202020;
    }
`
export const Actions = styled.div`
        display: flex;
        flex-direction: row;
        width: 100px;
        align-items:center;
        justify-content: space-between;
        width: 280px;
    }       
    button {
        border: solid 2px #EA5254;
        background: none;
        color: #EA5254;
        font-family:'Poppins';
        font-weight:500;
        font-size: 16px;
        border-radius: 6px;
        padding: 5px 25px 5px 25px;
    }

    a {
        color: #EA5254;
        font-family:'Poppins';
        font-weight:500;
        font-size: 16px;
    }
`

export const Editar = styled.div`
    a {
        color: #569CCD;
    }
`
