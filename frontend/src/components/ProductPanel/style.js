import styled from 'styled-components';

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        max-width:720px;
        width: 100%;
        height: 110px;
        border: solid 1px #569CCD;
        border-radius: 6px;
        padding: 20px;
        font-family:'Poppins';
    }
`

export const Title = styled.div`
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    h4 {
        font-size: 16px;
        color: #202020;
        font-weight: 600;
    }

    span {
        color: #EA5254;
        font-weight: 600;
    }
    
`

export const Product = styled.div`
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
        padding:10px 0 10px 0;
    }

    span {
        color: #202020;
        font-weight:600;
    }
`

export const ProductItem = styled.div`
        display: flex;
        flex-direction:row;
        align-items:center;
    }

    img {        
        width:40px;
        height:60px;
        object-fit:cover;  
        border-radius:20%;      
        margin-right:10px;
    }

    span {
        font-size:14px;
        color: #4E4E4E;
        font-weight:500;
    }
`

export const Details = styled.div`
        display: flex;
        flex-direction:row;
        justify-content:space-between;
    }    
`

export const Avaliacao = styled.div`
        display:flex;
        width:120px;
        height:30px;
        align-items:center;
    }
`

export const BotaoDetails = styled.div`
        display: flex;
        flex-direction: row;        
        align-items: center;
    }

    a {
        display: flex;
        align-items: center;
    }

    span {
        color: #569CCD;
        font-weight: 600;
        margin-right:5px;
    }

    svg {
        fill:#569CCD;
    }

` 

export const User = styled.div`
        display: flex;
        flex-direction: row;
    }
    span {
        margin-right: 5px;
    }
`
export const Name = styled.div`
    span {
       color: #EA5254;
    }
`